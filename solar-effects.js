// ═══════════════════════════════════════════════════════
//  SOLAR EFFECTS — Prominences + Solar Wind Particles
//  Performance-optimized, separate module
// ═══════════════════════════════════════════════════════

const SolarEffects = (() => {
  let prominences = null;
  let solarWind = null;
  let sunGroup = null;

  // ── PROMINENCES (3D plasma arcs) ──────────────────────
  function createProminenceGroup(sunRadius) {
    const group = new THREE.Group();
    const prominenceData = [];

    // Generate 5-7 prominences at random positions
    const count = 5 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.6; // near equator
      const height = sunRadius * (0.3 + Math.random() * 0.5);
      const width = sunRadius * (0.02 + Math.random() * 0.03);
      const span = 0.4 + Math.random() * 0.8;

      const prominence = createSingleProminence(sunRadius, height, width, span);
      // Position on sun surface
      const surfacePoint = new THREE.Vector3(
        Math.cos(phi) * Math.cos(theta),
        Math.sin(phi),
        Math.cos(phi) * Math.sin(theta)
      ).multiplyScalar(sunRadius * 0.98);

      prominence.position.copy(surfacePoint);
      // Orient the arc to face outward from sun center
      prominence.lookAt(surfacePoint.clone().multiplyScalar(2));
      prominence.rotateX(Math.PI * 0.5);

      group.add(prominence);
      prominenceData.push({
        mesh: prominence,
        baseScale: 1,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.5,
      });
    }

    return { group, data: prominenceData };
  }

  function createSingleProminence(sunRadius, height, width, span) {
    // Arc curve: from surface, up, and back down
    const start = new THREE.Vector3(-span * 0.5, 0, 0);
    const mid = new THREE.Vector3(0, height, (Math.random() - 0.5) * span * 0.3);
    const end = new THREE.Vector3(span * 0.5, 0, 0);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    const segments = 40;
    const tubeGeo = new THREE.TubeGeometry(curve, segments, width, 8, false);

    // Animated material
    const mat = new THREE.MeshBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(tubeGeo, mat);

    // Outer glow tube (wider, more transparent)
    const glowCurve = new THREE.QuadraticBezierCurve3(
      start.clone().multiplyScalar(1.3),
      mid.clone().multiplyScalar(1.15),
      end.clone().multiplyScalar(1.3)
    );
    const glowGeo = new THREE.TubeGeometry(glowCurve, segments, width * 3, 6, false);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xff8800,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);

    const wrapper = new THREE.Group();
    wrapper.add(mesh);
    wrapper.add(glowMesh);

    return wrapper;
  }

  // ── SOLAR WIND PARTICLES ──────────────────────────────
  function createSolarWind(sunRadius) {
    const count = 600;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const lifetimes = new Float32Array(count);
    const maxLifetimes = new Float32Array(count);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      resetParticle(i, positions, velocities, lifetimes, maxLifetimes, sizes, colors, sunRadius);
      // Spread initial particles across their lifetimes
      lifetimes[i] = Math.random() * maxLifetimes[i];
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float aSize;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uPixelRatio;
        void main() {
          vColor = color;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          float dist = length(mvPos.xyz);
          gl_PointSize = aSize * uPixelRatio * (200.0 / -mvPos.z);
          gl_PointSize = max(gl_PointSize, 1.0);
          // Fade based on distance from origin (radial fade)
          vAlpha = 1.0;
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float glow = 1.0 - smoothstep(0.0, 0.5, d);
          gl_FragColor = vec4(vColor, vAlpha * glow * 0.6);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const points = new THREE.Points(geo, mat);

    return {
      mesh: points,
      positions,
      velocities,
      lifetimes,
      maxLifetimes,
      sizes,
      colors,
      count,
      sunRadius,
    };
  }

  function resetParticle(i, positions, velocities, lifetimes, maxLifetimes, sizes, colors, sunRadius) {
    // Random direction from sun center
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const dir = new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta),
      Math.sin(phi) * Math.sin(theta),
      Math.cos(phi)
    );

    // Start just outside sun surface
    const startDist = sunRadius * (1.0 + Math.random() * 0.2);
    positions[i * 3] = dir.x * startDist;
    positions[i * 3 + 1] = dir.y * startDist;
    positions[i * 3 + 2] = dir.z * startDist;

    // Velocity outward with slight spiral (corotation with sun rotation)
    const speed = 0.15 + Math.random() * 0.25;
    const spiralFactor = 0.03;
    velocities[i * 3] = dir.x * speed + dir.z * spiralFactor;
    velocities[i * 3 + 1] = dir.y * speed;
    velocities[i * 3 + 2] = dir.z * speed - dir.x * spiralFactor;

    lifetimes[i] = 0;
    maxLifetimes[i] = 80 + Math.random() * 120; // frames until reset
    sizes[i] = 0.8 + Math.random() * 1.5;

    // Color: warm yellow-orange-white, random variation
    const warmth = Math.random();
    colors[i * 3] = 1.0;
    colors[i * 3 + 1] = 0.6 + warmth * 0.35;
    colors[i * 3 + 2] = 0.2 + warmth * 0.5;
  }

  function updateSolarWind(wind, speedMul) {
    if (!wind || !wind.mesh) return;
    const posArr = wind.mesh.geometry.attributes.position.array;
    const { velocities, lifetimes, maxLifetimes, sizes, colors, count, sunRadius } = wind;

    for (let i = 0; i < count; i++) {
      lifetimes[i] += speedMul;
      const progress = lifetimes[i] / maxLifetimes[i];

      if (progress >= 1.0) {
        // Reset particle
        resetParticle(i, posArr, velocities, lifetimes, maxLifetimes, sizes, colors, sunRadius);
        continue;
      }

      // Move outward
      posArr[i * 3] += velocities[i * 3] * speedMul;
      posArr[i * 3 + 1] += velocities[i * 3 + 1] * speedMul;
      posArr[i * 3 + 2] += velocities[i * 3 + 2] * speedMul;

      // Fade color as particle ages
      const fade = 1.0 - progress;
      colors[i * 3] = 1.0 * fade + 0.3 * (1 - fade);
      colors[i * 3 + 1] = (0.6 + 0.35 * (1 - progress)) * fade;
      colors[i * 3 + 2] = (0.2 + 0.5 * (1 - progress)) * fade;
    }

    wind.mesh.geometry.attributes.position.needsUpdate = true;
    wind.mesh.geometry.attributes.color.needsUpdate = true;
  }

  // ── UPDATE LOOP ───────────────────────────────────────
  function update(time, speedMul) {
    // Animate prominences
    if (prominences) {
      prominences.data.forEach(p => {
        p.phase += p.speed * speedMul * 0.02;
        const breathe = 1 + Math.sin(p.phase) * 0.15;
        const flicker = 0.85 + Math.sin(p.phase * 3.7) * 0.15;
        p.mesh.scale.set(breathe, breathe, breathe);
        // Pulse opacity
        p.mesh.traverse(child => {
          if (child.isMesh) {
            child.material.opacity = (child.material.color.r > 0.9 ? 0.55 : 0.12) * flicker;
          }
        });
      });
    }

    // Update solar wind
    updateSolarWind(solarWind, speedMul);
  }

  // ── PUBLIC API ────────────────────────────────────────
  return {
    init(sunGroupRef, sunRadius) {
      sunGroup = sunGroupRef;

      // Create and add prominences
      const prom = createProminenceGroup(sunRadius);
      prominences = prom;
      sunGroup.add(prom.group);

      // Create and add solar wind particles
      solarWind = createSolarWind(sunRadius);
      sunGroup.add(solarWind.mesh);
    },

    update,

    dispose() {
      if (prominences) {
        prominences.group.traverse(child => {
          if (child.isMesh) {
            child.geometry.dispose();
            child.material.dispose();
          }
        });
        prominences = null;
      }
      if (solarWind) {
        solarWind.mesh.geometry.dispose();
        solarWind.mesh.material.dispose();
        solarWind = null;
      }
    },
  };
})();
