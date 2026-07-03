// ═══════════════════════════════════════════════════════
//  COMET SYSTEM — js/comet.js
//  Esfera brillante + luz interna + rastro GLSL
//  Colores: verde, azul, violeta (como cometa real)
// ═══════════════════════════════════════════════════════

'use strict';

// ── PALETA DE COLORES DEL COMETA ──
const COMET_PALETTES = [
  { core: 0x00ffcc, glow: 0x00aaff, trail: [0.0, 0.8, 1.0], light: 0x00ccff },   // Cian-azul eléctrico
  { core: 0x44ff88, glow: 0x00ff44, trail: [0.0, 1.0, 0.4], light: 0x00ff88 },   // Verde esmeralda
  { core: 0xaa44ff, glow: 0x7700ff, trail: [0.6, 0.1, 1.0], light: 0x9933ff },   // Violeta profundo
  { core: 0x4488ff, glow: 0x0044ff, trail: [0.1, 0.4, 1.0], light: 0x2255ff },   // Azul profundo
];

// ── VERTEX SHADER DEL RASTRO ──
const TRAIL_VERTEX_SHADER = `
  attribute float aAlpha;
  attribute float aIndex;
  uniform float uTotalPoints;
  varying float vAlpha;
  varying float vIndex;
  varying vec3 vColor;

  void main() {
    float t = 1.0 - (aIndex / uTotalPoints);
    vAlpha = aAlpha * t * t;
    vIndex = t;
    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// ── FRAGMENT SHADER DEL RASTRO ──
const TRAIL_FRAGMENT_SHADER = `
  uniform vec3 uCoreColor;
  uniform float uTime;
  varying float vAlpha;
  varying float vIndex;
  varying vec3 vColor;

  void main() {
    // Mezcla desde color caliente en la cabeza hasta fría en la cola
    vec3 hotColor = vec3(1.0, 1.0, 1.0);                       // blanco en la punta
    vec3 midColor = uCoreColor;
    vec3 coldColor = uCoreColor * 0.3;

    vec3 finalColor = mix(hotColor, midColor, smoothstep(0.0, 0.4, 1.0 - vIndex));
    finalColor = mix(finalColor, coldColor, smoothstep(0.4, 1.0, 1.0 - vIndex));

    // Parpadeo sutil
    float flicker = 1.0 + sin(uTime * 20.0 + vIndex * 8.0) * 0.08;
    finalColor *= flicker;

    gl_FragColor = vec4(finalColor, vAlpha * 0.95);
  }
`;

// ── VERTEX SHADER DEL HALO DE ESFERA ──
const SPHERE_VERTEX_SHADER = `
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPos = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-worldPos.xyz);
    gl_Position = projectionMatrix * worldPos;
  }
`;

// ── FRAGMENT SHADER DEL HALO DE ESFERA ──
const SPHERE_FRAGMENT_SHADER = `
  uniform vec3 uGlowColor;
  uniform float uIntensity;
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    float rim = 1.0 - max(dot(vViewDir, vNormal), 0.0);
    float pulse = 1.0 + sin(uTime * 4.0) * 0.12;
    float glow = pow(rim, 2.5) * uIntensity * pulse;

    // Fresnel exterior vibrante
    vec3 color = uGlowColor * glow;
    float alpha = clamp(glow * 0.9, 0.0, 0.85);
    gl_FragColor = vec4(color, alpha);
  }
`;

// ═══════════════════════════════════════════════════════
//  CLASE PRINCIPAL DEL COMETA
// ═══════════════════════════════════════════════════════
class CometSystem {
  constructor(scene) {
    this.scene = scene;
    this.comets = [];
    this.spawnInterval = 0;
    this.minSpawnFrames = 180; // ~3 segundos entre cometas
    this.maxSpawnFrames = 400;
    this.nextSpawn = 150;
    this.frameCount = 0;
  }

  // ── CREAR UN COMETA ──
  _createComet() {
    const palette = COMET_PALETTES[Math.floor(Math.random() * COMET_PALETTES.length)];
    const group = new THREE.Group();

    // ── 1. ESFERA NÚCLEO (brillante sólida) ──
    const coreRadius = 0.6 + Math.random() * 0.6;
    const coreGeo = new THREE.SphereGeometry(coreRadius, 24, 24);
    const coreMat = new THREE.MeshStandardMaterial({
      color: palette.core,
      emissive: new THREE.Color(palette.core),
      emissiveIntensity: 2.5,
      roughness: 0.15,
      metalness: 0.4,
      transparent: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // ── 2. HALO FRESNEL (envuelve la esfera) ──
    const haloGeo = new THREE.SphereGeometry(coreRadius * 1.5, 24, 24);
    const haloMat = new THREE.ShaderMaterial({
      uniforms: {
        uGlowColor: { value: new THREE.Color(palette.glow) },
        uIntensity: { value: 2.2 },
        uTime: { value: 0.0 },
      },
      vertexShader: SPHERE_VERTEX_SHADER,
      fragmentShader: SPHERE_FRAGMENT_SHADER,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    group.add(haloMesh);

    // ── 3. LUZ PUNTUAL INTERNA (como un foco desde adentro) ──
    const pointLight = new THREE.PointLight(palette.light, 8, 60, 2);
    pointLight.position.set(0, 0, 0);
    group.add(pointLight);

    // ── 4. SPRITE DE DESTELLO CENTRAL ──
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = glowCanvas.height = 128;
    const gctx = glowCanvas.getContext('2d');
    const gr = gctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    const c = new THREE.Color(palette.glow);
    gr.addColorStop(0, `rgba(255,255,255,0.9)`);
    gr.addColorStop(0.15, `rgba(${(c.r*255)|0},${(c.g*255)|0},${(c.b*255)|0},0.7)`);
    gr.addColorStop(0.5, `rgba(${(c.r*255)|0},${(c.g*255)|0},${(c.b*255)|0},0.25)`);
    gr.addColorStop(1, `rgba(0,0,0,0)`);
    gctx.fillStyle = gr;
    gctx.fillRect(0, 0, 128, 128);
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    const glowMat = new THREE.SpriteMaterial({
      map: glowTex, blending: THREE.AdditiveBlending,
      depthWrite: false, transparent: true, opacity: 0.9,
    });
    const glowSprite = new THREE.Sprite(glowMat);
    glowSprite.scale.set(coreRadius * 8, coreRadius * 8, 1);
    group.add(glowSprite);

    // ── 5. RASTRO SHADER ──
    const trailCount = 60;
    const trailPositions = new Float32Array(trailCount * 3);
    const trailAlphas = new Float32Array(trailCount);
    const trailIndices = new Float32Array(trailCount);
    const trailColors = new Float32Array(trailCount * 3);

    const tc = new THREE.Color().setRGB(...palette.trail);
    for (let i = 0; i < trailCount; i++) {
      trailAlphas[i] = 1.0;
      trailIndices[i] = i;
      trailColors[i * 3] = tc.r;
      trailColors[i * 3 + 1] = tc.g;
      trailColors[i * 3 + 2] = tc.b;
    }

    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions.slice(), 3));
    trailGeo.setAttribute('aAlpha', new THREE.BufferAttribute(trailAlphas, 1));
    trailGeo.setAttribute('aIndex', new THREE.BufferAttribute(trailIndices, 1));
    trailGeo.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));

    const trailMat = new THREE.ShaderMaterial({
      uniforms: {
        uCoreColor: { value: new THREE.Color(palette.glow) },
        uTotalPoints: { value: trailCount },
        uTime: { value: 0.0 },
      },
      vertexShader: TRAIL_VERTEX_SHADER,
      fragmentShader: TRAIL_FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const trailLine = new THREE.Line(trailGeo, trailMat);
    this.scene.add(trailLine);

    // ── POSICIÓN Y DIRECCIÓN ──
    const startPos = new THREE.Vector3(
      (Math.random() - 0.5) * 400,
      80 + Math.random() * 180,
      (Math.random() - 0.5) * 400
    );
    const dir = new THREE.Vector3(
      (Math.random() - 0.5) * 1.5,
      -(0.4 + Math.random() * 0.6),
      (Math.random() - 0.5) * 1.5
    ).normalize();

    group.position.copy(startPos);
    this.scene.add(group);

    // Historial de posiciones para el rastro
    const posHistory = [];
    for (let i = 0; i < trailCount; i++) posHistory.push(startPos.clone());

    return {
      group,
      coreMesh,
      haloMesh,
      haloMat,
      trailLine,
      trailMat,
      trailGeo,
      posHistory,
      dir,
      speed: 2.5 + Math.random() * 3.5,
      life: 0,
      maxLife: 120 + Math.random() * 160,
      palette,
    };
  }

  // ── ACTUALIZAR TODOS LOS COMETAS ──
  update(time) {
    this.frameCount++;

    // Spawnear nuevo cometa
    if (this.frameCount >= this.nextSpawn) {
      this.comets.push(this._createComet());
      this.nextSpawn = this.frameCount + this.minSpawnFrames + Math.random() * (this.maxSpawnFrames - this.minSpawnFrames);
    }

    // Actualizar cada cometa
    for (let i = this.comets.length - 1; i >= 0; i--) {
      const cm = this.comets[i];
      cm.life++;

      // Mover la cabeza
      cm.group.position.addScaledVector(cm.dir, cm.speed);

      // Actualizar historial de posiciones
      cm.posHistory.unshift(cm.group.position.clone());
      if (cm.posHistory.length > cm.trailGeo.attributes.position.count) {
        cm.posHistory.pop();
      }

      // Escribir rastro en el buffer
      const posArr = cm.trailGeo.attributes.position.array;
      for (let j = 0; j < cm.posHistory.length; j++) {
        const p = cm.posHistory[j];
        posArr[j * 3] = p.x;
        posArr[j * 3 + 1] = p.y;
        posArr[j * 3 + 2] = p.z;
      }
      cm.trailGeo.attributes.position.needsUpdate = true;

      // Actualizar uniformes de shaders
      cm.haloMat.uniforms.uTime.value = time;
      cm.trailMat.uniforms.uTime.value = time;

      // Fade out al final de la vida
      const lifeRatio = cm.life / cm.maxLife;
      const fade = 1.0 - Math.max(0, (lifeRatio - 0.7) / 0.3);
      cm.haloMat.uniforms.uIntensity.value = 2.2 * fade;
      cm.trailLine.material.opacity = fade;
      cm.group.traverse(child => {
        if (child.material && child !== cm.haloMesh) {
          if (child.material.opacity !== undefined) child.material.opacity = fade;
        }
      });

      // Limpiar cuando termine la vida
      if (cm.life >= cm.maxLife) {
        this.scene.remove(cm.group);
        this.scene.remove(cm.trailLine);
        cm.trailGeo.dispose();
        cm.trailMat.dispose();
        cm.haloMat.dispose();
        cm.group.traverse(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
        this.comets.splice(i, 1);
      }
    }
  }

  // ── LIMPIAR TODO ──
  dispose() {
    for (const cm of this.comets) {
      this.scene.remove(cm.group);
      this.scene.remove(cm.trailLine);
      cm.trailGeo.dispose();
    }
    this.comets = [];
  }
}

// Exportar para uso global (sin módulos ES, compatible con <script>)
window.CometSystem = CometSystem;
