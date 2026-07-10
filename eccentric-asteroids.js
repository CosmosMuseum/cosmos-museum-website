// ═══════════════════════════════════════════════════════
//  ECCENTRIC ASTEROIDS — Keplerian elliptical orbits
//  Cross the solar system on dramatic trajectories
//  Performance-optimized with InstancedMesh
// ═══════════════════════════════════════════════════════

const EccentricAsteroids = (() => {
  let asteroidGroup = null;
  let asteroidData = [];
  let instancedMesh = null;

  // ── ROCK GEOMETRY (shared) ────────────────────────────
  function createRockGeometry() {
    const geo = new THREE.IcosahedronGeometry(0.15, 1);
    const posAttr = geo.getAttribute('position');
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z = posAttr.getZ(i);
      const noise = 0.65 + Math.random() * 0.7;
      posAttr.setXYZ(i, x * noise, y * noise, z * noise);
    }
    posAttr.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }

  // ── KEPLERIAN ORBIT HELPER ────────────────────────────
  function solveKepler(M, e, tol) {
    // Newton-Raphson to solve Kepler's equation: M = E - e*sin(E)
    tol = tol || 1e-6;
    let E = M;
    for (let i = 0; i < 20; i++) {
      const dE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
      E -= dE;
      if (Math.abs(dE) < tol) break;
    }
    return E;
  }

  function keplerToCartesian(a, e, i, omega, w, M) {
    // a = semi-major axis, e = eccentricity, i = inclination
    // omega = longitude of ascending node, w = argument of periapsis
    // M = mean anomaly
    const E = solveKepler(M, e);
    // True anomaly
    const cosV = (Math.cos(E) - e) / (1 - e * Math.cos(E));
    const sinV = (Math.sqrt(1 - e * e) * Math.sin(E)) / (1 - e * Math.cos(E));
    const v = Math.atan2(sinV, cosV);
    // Radius
    const r = a * (1 - e * Math.cos(E));
    // Position in orbital plane
    const xOrb = r * Math.cos(v);
    const yOrb = r * Math.sin(v);
    // Rotate to 3D using orbital elements
    const cosW = Math.cos(w), sinW = Math.sin(w);
    const cosO = Math.cos(omega), sinO = Math.sin(omega);
    const cosI = Math.cos(i), sinI = Math.sin(i);

    return new THREE.Vector3(
      xOrb * (cosW * cosO - sinW * sinO * cosI) - yOrb * (sinW * cosO + cosW * sinO * cosI),
      xOrb * (cosW * sinO + sinW * cosO * cosI) + yOrb * (cosW * cosO - sinW * sinO * cosI),
      xOrb * (sinW * sinI) + yOrb * (cosW * sinI)
    );
  }

  // ── BUILD ECCENTRIC ASTEROIDS ─────────────────────────
  function build(count) {
    count = count || 30;
    asteroidGroup = new THREE.Group();
    asteroidData = [];

    const rockGeo = createRockGeometry();
    const asteroidColors = [
      0x6b6b7b, 0x7a7062, 0x5e5e6e, 0x8a7e6b,
      0x4a4a5a, 0x998877, 0x554433, 0x776655,
    ];

    // Material with varying color per instance
    const baseMat = new THREE.MeshPhongMaterial({
      color: 0x888888,
      shininess: 5,
      flatShading: true,
    });

    instancedMesh = new THREE.InstancedMesh(rockGeo, baseMat, count);
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      // Orbital elements — dramatic variety
      const a = 15 + Math.random() * 95;           // semi-major axis (AU-like units)
      const e = 0.15 + Math.random() * 0.75;       // high eccentricity (0.15-0.9!)
      const incl = (Math.random() - 0.5) * Math.PI * 0.8; // up to ±72° inclination
      const omega = Math.random() * Math.PI * 2;   // longitude of ascending node
      const w = Math.random() * Math.PI * 2;       // argument of periapsis
      const M0 = Math.random() * Math.PI * 2;      // initial mean anomaly
      const n = 0.001 + Math.random() * 0.004;     // mean motion (speed)

      const size = 0.1 + Math.random() * 0.5;
      const colorIdx = Math.floor(Math.random() * asteroidColors.length);

      asteroidData.push({
        a, e, incl, omega, w, M0, n,
        size,
        colorIdx,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
      });

      // Initial transform
      const pos = keplerToCartesian(a, e, incl, omega, w, M0);
      dummy.position.copy(pos);
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      dummy.scale.setScalar(size);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);

      // Color per instance
      const c = new THREE.Color(asteroidColors[colorIdx]);
      instancedMesh.setColorAt(i, c);
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;
    asteroidGroup.add(instancedMesh);

    // Label
    const label = createTextSprite('☄ Asteroides Excéntricos', {
      fontSize: 38,
      color: '#ccaa77',
      glowColor: '#886644',
      scale: 3.0,
    });
    label.position.y = 2;
    label.visible = false;
    asteroidGroup.add(label);

    return asteroidGroup;
  }

  // ── UPDATE LOOP ───────────────────────────────────────
  function update(time, speedMul) {
    if (!instancedMesh || asteroidData.length === 0) return;

    const dummy = new THREE.Object3D();
    const elapsed = time * 100; // scale time for visible motion

    for (let i = 0; i < asteroidData.length; i++) {
      const ad = asteroidData[i];
      const M = ad.M0 + (elapsed * ad.n * speedMul);
      const pos = keplerToCartesian(ad.a, ad.e, ad.incl, ad.omega, ad.w, M);

      dummy.position.copy(pos);
      // Tumbling rotation
      dummy.rotation.x += ad.rotationSpeed * speedMul;
      dummy.rotation.y += ad.rotationSpeed * 0.7 * speedMul;
      dummy.scale.setScalar(ad.size);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
  }

  // ── PUBLIC API ────────────────────────────────────────
  return {
    build,
    update,
    dispose() {
      if (instancedMesh) {
        instancedMesh.geometry.dispose();
        instancedMesh.material.dispose();
        instancedMesh = null;
      }
      asteroidData = [];
      asteroidGroup = null;
    },
    getGroup() { return asteroidGroup; },
  };
})();
