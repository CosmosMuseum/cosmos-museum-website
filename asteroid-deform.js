// ═══════════════════════════════════════════════════════
//  ASTEROID DEFORMATION — Vertex Shader Noise
//  3D noise displacement along normals for realistic shape
// ═══════════════════════════════════════════════════════

const AsteroidDeform = (() => {

  const noiseGLSL = `
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0) * 2.0 + 1.0;
      vec4 s1 = floor(b1) * 2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    float fbm(vec3 p) {
      float f = 0.0;
      f += 0.5000 * snoise(p); p *= 2.01;
      f += 0.2500 * snoise(p); p *= 2.02;
      f += 0.1250 * snoise(p); p *= 2.03;
      f += 0.0625 * snoise(p);
      return f;
    }
  `;

  // ── VERTEX SHADER ───────────────────────────────────
  const vertexShader = `
    precision highp float;

    ${noiseGLSL}

    attribute float instanceSeed;

    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying float vDisplace;

    void main() {
      float seed = instanceSeed;

      // 3-level noise deformation along normal
      vec3 noisePos = position * 2.5 + seed * 100.0;

      // Macro shape (big irregular form)
      float macro = fbm(noisePos) * 0.4;

      // Medium detail (ridges, bumps)
      float medium = snoise(noisePos * 3.0 + seed * 50.0) * 0.15;

      // Micro detail (surface roughness)
      float micro = snoise(noisePos * 8.0 + seed * 200.0) * 0.05;

      float displacement = macro + medium + micro;

      vec3 displaced = position + normal * displacement;

      vDisplace = displacement;
      vNormal = normalize(normalMatrix * normal);

      vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
      vViewPosition = -mvPosition.xyz;

      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  // ── FRAGMENT SHADER ─────────────────────────────────
  const fragmentShader = `
    precision highp float;

    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying float vDisplace;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(vec3(1.0, 0.5, 0.3));
      vec3 viewDir = normalize(vViewPosition);

      // Simple lighting
      float NdotL = max(dot(normal, lightDir), 0.0);
      float wrap = max((NdotL + 0.3) / 1.3, 0.0);
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);

      // Base color varies with displacement (elevated = lighter, recessed = darker)
      float brightness = 0.7 + vDisplace * 0.5;
      vec3 baseColor = vec3(brightness);

      vec3 ambient = baseColor * 0.1;
      vec3 lit = baseColor * wrap * 1.1;
      vec3 finalColor = ambient + lit;

      // Subtle rim
      finalColor += fresnel * 0.05;

      // Tone mapping
      finalColor = finalColor / (finalColor + vec3(1.0));
      finalColor = pow(finalColor, vec3(1.0/2.2));

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  // ── MATERIAL ────────────────────────────────────────
  function createMaterial() {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {},
    });
  }

  // ── GEOMETRY ────────────────────────────────────────
  function createGeometry(radius) {
    return new THREE.IcosahedronGeometry(radius || 1.0, 3);
  }

  // ── INSTANCED MESH with per-instance seed ───────────
  function createInstancedMesh(count, geometry, material) {
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      seeds[i] = Math.random();
    }
    geometry.setAttribute('instanceSeed', new THREE.InstancedBufferAttribute(seeds, 1));

    return mesh;
  }

  return {
    createMaterial,
    createGeometry,
    createInstancedMesh,
  };
})();
