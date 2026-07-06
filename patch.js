const fs = require('fs');
let s = fs.readFileSync('script.js', 'utf8');

// 1. Remove Planet glow sprite
s = s.replace(/\/\/ Planet glow sprite\s+const hex = parseInt\(data\.glowColor\.replace\('#', ''\), 16\);\s+const glow = createGlowSprite\(hex, data\.radius \* 4\);\s+glow\.material\.opacity = 0\.35;\s+group\.add\(glow\);\s+/, '');

// 2. Remove headGlow from createOrbitLine
s = s.replace(/const headGeo = new THREE\.SphereGeometry[\s\S]*?group\.add\(headGlow\);\s+group\.userData = \{ isOrbitLine: true, planetKey, radius, line, head, headGlow, color: colorHex \};/, 'group.userData = { isOrbitLine: true, planetKey, radius, line, color: colorHex };');

// 3. Remove headGlow from updateOrbitLines
s = s.replace(/const { planetKey, radius, line, head, headGlow } = og\.userData;/, 'const { planetKey, radius, line } = og.userData;');
s = s.replace(/const angle = po\.angle[\s\S]*?headGlow\.scale\.set\(s \* 2, s \* 2, 1\);/, '');

// 4. Update buildSun to use ShaderMaterial
const sunOld = `const tex = realTextures.sun_map || createTexture('sun');
  const geo = new THREE.SphereGeometry(5, 128, 128);
  const mat = new THREE.MeshBasicMaterial({ map: tex });
  const mesh = new THREE.Mesh(geo, mat);`;
const sunNew = `const geo = new THREE.SphereGeometry(5, 128, 128);
  const tex = realTextures.sun_map || createTexture('sun');

  const sunMat = new THREE.ShaderMaterial({
    uniforms: { uTexture: { value: tex }, uTime: { value: 0.0 } },
    vertexShader: \`
      varying vec2 vUv; varying vec3 vNormal; varying vec3 vPosition;
      void main() { vUv = uv; vNormal = normalize(normalMatrix * normal); vPosition = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    \`,
    fragmentShader: \`
      uniform sampler2D uTexture; uniform float uTime;
      varying vec2 vUv; varying vec3 vNormal; varying vec3 vPosition;
      vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
        i = mod289(i); vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857; vec3 ns = n_ * D.wyz - D.xzx; vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_); vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }
      float fbm(vec3 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * snoise(p); p *= 2.1; a *= 0.48; } return v; }
      void main() {
        vec3 spherePos = normalize(vPosition); float t = uTime * 0.06;
        float n1 = fbm(spherePos * 3.0 + vec3(t * 0.7, t * 0.3, t * 0.5)); float n2 = fbm(spherePos * 6.0 + vec3(-t * 0.4, t * 0.6, -t * 0.2) + n1 * 0.5);
        float n3 = fbm(spherePos * 12.0 + vec3(t * 1.2, -t * 0.8, t * 0.4) + n2 * 0.3); float turbulence = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
        vec4 texColor = texture2D(uTexture, vUv); float hot = smoothstep(0.1, 0.6, turbulence);
        vec3 plasmaBright = vec3(1.0, 0.95, 0.8); vec3 plasmaMid = vec3(1.0, 0.65, 0.15); vec3 plasmaDark = vec3(0.85, 0.3, 0.02);
        vec3 sunColor = mix(plasmaDark, plasmaMid, smoothstep(-0.2, 0.3, turbulence)); sunColor = mix(sunColor, plasmaBright, smoothstep(0.3, 0.8, turbulence));
        vec3 finalColor = mix(texColor.rgb, sunColor, 0.65); float fresnel = dot(vNormal, normalize(cameraPosition - vPosition));
        float limb = pow(max(fresnel, 0.0), 0.45); finalColor *= mix(0.25, 1.0, limb); finalColor *= 1.4;
        float flicker = 1.0 + sin(t * 8.0) * 0.015 + sin(t * 13.0) * 0.01; finalColor *= flicker;
        gl_FragColor = vec4(finalColor, 1.0);
      }
    \`
  });
  const mesh = new THREE.Mesh(geo, sunMat);`;
s = s.replace(sunOld, sunNew);

// 5. Update uTime updates
s = s.replace(/if \(planetObjects\.Sun && planetObjects\.Sun\.group\.userData\._pulse\) \{\s+planetObjects\.Sun\.group\.userData\._pulse\(0\.016 \* speedMul\);\s+\}/g, \`if (planetObjects.Sun && planetObjects.Sun.group.userData._pulse) { planetObjects.Sun.group.userData._pulse(0.016 * speedMul); } if (planetObjects.Sun && planetObjects.Sun.mesh.material.uniforms) { planetObjects.Sun.mesh.material.uniforms.uTime.value = animationTime; }\`);

s = s.replace(/sunPO\.mesh\.scale\.set\(pulse, pulse, pulse\);/g, \`sunPO.mesh.scale.set(pulse, pulse, pulse); if (sunPO.mesh.material.uniforms) { sunPO.mesh.material.uniforms.uTime.value = typeof animationTime !== 'undefined' ? animationTime : t; }\`);

// 6. ASTEROIDS SPRITES
const beltOld = \`function buildAsteroidBelt() {
  const count = 4000;
  const rockGeo = createRockGeometry();
  const rockMat = new THREE.MeshPhongMaterial({ color: 0x998877, shininess: 5 });
  const mesh = new THREE.InstancedMesh(rockGeo, rockMat, count);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    const r = 43 + Math.random() * 8;
    const a = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 1.5;
    dummy.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    const s = 0.2 + Math.random() * 1.8;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);
}\`;

const beltNew = \`function buildAsteroidBelt() {
  const count = 4000;
  const tex = new THREE.TextureLoader().load('img/textures/asteroide.png');
  const mat = new THREE.SpriteMaterial({ map: tex });
  const group = new THREE.Group();
  for (let i = 0; i < count; i++) {
    const sprite = new THREE.Sprite(mat);
    const r = 43 + Math.random() * 8;
    const a = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 1.5;
    sprite.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    const s = 0.4 + Math.random() * 1.8;
    sprite.scale.set(s, s, s);
    group.add(sprite);
  }
  scene.add(group);
}\`;
s = s.replace(beltOld, beltNew);

const kuiperOld = \`function buildKuiperBelt() {
  const count = 4000;
  const rockGeo = createRockGeometry();
  const rockMat = new THREE.MeshPhongMaterial({ color: 0x667788, shininess: 3 });
  const mesh = new THREE.InstancedMesh(rockGeo, rockMat, count);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    const r = 122 + Math.random() * 18;
    const a = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 4;
    dummy.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    const s = 0.15 + Math.random() * 2.0;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);
}\`;

const kuiperNew = \`function buildKuiperBelt() {
  const count = 4000;
  const tex = new THREE.TextureLoader().load('img/textures/asteroide.png');
  const mat = new THREE.SpriteMaterial({ map: tex });
  const group = new THREE.Group();
  for (let i = 0; i < count; i++) {
    const sprite = new THREE.Sprite(mat);
    const r = 122 + Math.random() * 18;
    const a = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 4;
    sprite.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    const s = 0.3 + Math.random() * 2.0;
    sprite.scale.set(s, s, s);
    group.add(sprite);
  }
  scene.add(group);
}\`;
s = s.replace(kuiperOld, kuiperNew);

const groupOld = \`function buildAsteroidGroup() {
  asteroidGroup = new THREE.Group();

  const asteroidColors = [0x6b6b7b, 0x7a7062, 0x5e5e6e, 0x8a7e6b, 0x4a4a5a];

  for (let i = 0; i < 25; i++) {
    const size = 0.15 + Math.random() * 0.5;
    const geo = new THREE.IcosahedronGeometry(size, 1);
    const posAttr = geo.getAttribute('position');
    for (let j = 0; j < posAttr.count; j++) {
      const x = posAttr.getX(j);
      const y = posAttr.getY(j);
      const z = posAttr.getZ(j);
      const noise = 0.7 + Math.random() * 0.6;
      posAttr.setXYZ(j, x * noise, y * noise, z * noise);
    }
    posAttr.needsUpdate = true;
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      color: asteroidColors[Math.floor(Math.random() * asteroidColors.length)],
      roughness: 0.9 + Math.random() * 0.1,
      metalness: Math.random() * 0.15,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    const orbitAngle = Math.random() * Math.PI * 2;
    const orbitRadius = 80 + (Math.random() - 0.5) * 12;
    const orbitInclination = 0.4 + (Math.random() - 0.5) * 0.15;
    mesh.position.x = Math.cos(orbitAngle) * orbitRadius;
    mesh.position.z = Math.sin(orbitAngle) * orbitRadius;
    mesh.position.y = Math.sin(orbitAngle * 0.7) * orbitRadius * orbitInclination;
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    mesh.userData = {
      orbitAngle,
      orbitRadius,
      orbitInclination,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      orbitSpeed: 0.002 + (Math.random() - 0.5) * 0.0008,
    };
    asteroidGroup.add(mesh);
  }\`;

const groupNew = \`function buildAsteroidGroup() {
  asteroidGroup = new THREE.Group();

  const tex = new THREE.TextureLoader().load('img/textures/asteroide.png');
  const mat = new THREE.SpriteMaterial({ map: tex });

  for (let i = 0; i < 25; i++) {
    const size = 0.5 + Math.random() * 1.5;
    const mesh = new THREE.Sprite(mat);
    mesh.scale.set(size, size, size);

    const orbitAngle = Math.random() * Math.PI * 2;
    const orbitRadius = 80 + (Math.random() - 0.5) * 12;
    const orbitInclination = 0.4 + (Math.random() - 0.5) * 0.15;
    mesh.position.x = Math.cos(orbitAngle) * orbitRadius;
    mesh.position.z = Math.sin(orbitAngle) * orbitRadius;
    mesh.position.y = Math.sin(orbitAngle * 0.7) * orbitRadius * orbitInclination;
    mesh.userData = {
      orbitAngle,
      orbitRadius,
      orbitInclination,
      rotSpeed: 0,
      orbitSpeed: 0.002 + (Math.random() - 0.5) * 0.0008,
    };
    asteroidGroup.add(mesh);
  }\`;
s = s.replace(groupOld, groupNew);

fs.writeFileSync('script.js', s, 'utf8');
