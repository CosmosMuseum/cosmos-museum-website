// ═══════════════════════════════════════════════════════
//  SHOOTING STARS (Cometas) — Módulo independiente
// ═══════════════════════════════════════════════════════

let cometNoiseTex = null;
function getCometNoise() {
    if (!cometNoiseTex) {
        const size = 512;
        const c = document.createElement('canvas');
        c.width = c.height = size;
        const ctx = c.getContext('2d');
        const imgData = ctx.createImageData(size, size);
        for(let i = 0; i < size * size * 4; i += 4) {
            const v = Math.random() * 255;
            imgData.data[i] = v;
            imgData.data[i+1] = v;
            imgData.data[i+2] = v;
            imgData.data[i+3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
        cometNoiseTex = new THREE.CanvasTexture(c);
        cometNoiseTex.wrapS = THREE.RepeatWrapping;
        cometNoiseTex.wrapT = THREE.RepeatWrapping;
        cometNoiseTex.minFilter = THREE.LinearFilter;
        cometNoiseTex.magFilter = THREE.LinearFilter;
    }
    return cometNoiseTex;
}

const cometVertSrc = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const cometFragSrc = `
  uniform float time;
  uniform float u_seed;
  uniform float opacity;
  uniform vec3 u_color;
  uniform sampler2D u_channel0;
  varying vec2 vUv;

  void main() {
    vec2 q = (vUv - vec2(0.9, 0.5)) * vec2(25.0, 10.0);
    float t = time;
    float seed = u_seed;
    
    vec4 O = vec4(0.0);
    O += (cos(sin(seed)*vec4(1.0,2.0,3.0,0.0))+1.0)
        * 1.0
        / length(max(q,
            q / vec2(texture2D(u_channel0, q/exp(sin(seed)+5.0)+vec2(0.0,seed)/8.0).r*40.0, 2.0))
        );
        
    vec4 final = O*O/1e4;
    vec4 t2 = exp(2.0*final);
    vec3 color = ((t2.rgb - 1.0) / (t2.rgb + 1.0)) * u_color;
    
    float alpha = max(max(color.r, color.g), color.b);
    float edgeFade = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x) * smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.8, vUv.y);
    
    gl_FragColor = vec4(color, alpha * edgeFade * opacity * 2.0);
  }
`;

const shootingStars = [];

function getCometColor() {
  const r = Math.random() * 100;
  if (r < 50) return [0.7, 0.85, 1.0];   // 50% blanco azulado
  if (r < 75) return [0.2, 1.0, 0.4];    // 25% verde
  if (r < 93) return [1.0, 0.8, 0.2];    // 18% dorado
  return [0.6, 0.2, 1.0];                 // 7% violeta
}

function spawnShootingStar() {
  const group = new THREE.Group();

  const cometColor = getCometColor();
  const geo = new THREE.PlaneGeometry(200, 65);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      u_seed: { value: Math.random() * 100.0 },
      opacity: { value: 1.0 },
      u_color: { value: new THREE.Vector3(cometColor[0], cometColor[1], cometColor[2]) },
      u_channel0: { value: getCometNoise() }
    },
    vertexShader: cometVertSrc,
    fragmentShader: cometFragSrc,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide
  });

  const plane1 = new THREE.Mesh(geo, mat);
  const plane2 = new THREE.Mesh(geo, mat);
  plane2.rotation.x = Math.PI / 2;
  group.add(plane1, plane2);

  // Position & Direction
  const start = new THREE.Vector3(
    300 + Math.random() * 200,      
    80 + Math.random() * 150,       
    (Math.random() - 0.5) * 400     
  );
  const dir = new THREE.Vector3(
    -(0.8 + Math.random() * 0.4),   
    -(0.2 + Math.random() * 0.4),   
    (Math.random() - 0.5) * 0.2     
  ).normalize();

  group.position.copy(start);
  
  // Orient group so the FRONT (+X axis) points towards the movement direction (dir)
  group.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir.clone().normalize());

  group.userData = { 
    dir, 
    speed: 3 + Math.random() * 3, 
    life: 0, 
    maxLife: 200 + Math.random() * 100,
    mat: mat
  };

  scene.add(group);
  shootingStars.push(group);
}

function spawnCometSwarm() {
  const count = 3 + Math.floor(Math.random() * 3);
  const baseStart = new THREE.Vector3(
    300 + Math.random() * 200,
    80 + Math.random() * 150,
    (Math.random() - 0.5) * 400
  );
  const baseDir = new THREE.Vector3(
    -(0.8 + Math.random() * 0.4),
    -(0.2 + Math.random() * 0.4),
    (Math.random() - 0.5) * 0.2
  ).normalize();

  for (let i = 0; i < count; i++) {
    const group = new THREE.Group();
    const cometColor = getCometColor();
    const geo = new THREE.PlaneGeometry(200, 65);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        u_seed: { value: Math.random() * 100.0 },
        opacity: { value: 1.0 },
        u_color: { value: new THREE.Vector3(cometColor[0], cometColor[1], cometColor[2]) },
        u_channel0: { value: getCometNoise() }
      },
      vertexShader: cometVertSrc,
      fragmentShader: cometFragSrc,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    const plane1 = new THREE.Mesh(geo, mat);
    const plane2 = new THREE.Mesh(geo, mat);
    plane2.rotation.x = Math.PI / 2;
    group.add(plane1, plane2);

    const offset = new THREE.Vector3(
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 40
    );
    const start = baseStart.clone().add(offset);
    const dir = baseDir.clone();
    dir.x += (Math.random() - 0.5) * 0.1;
    dir.y += (Math.random() - 0.5) * 0.1;
    dir.normalize();

    group.position.copy(start);
    group.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir.clone());

    group.userData = {
      dir,
      speed: 3 + Math.random() * 3,
      life: 0,
      maxLife: 200 + Math.random() * 100,
      mat: mat
    };

    scene.add(group);
    shootingStars.push(group);
  }
}

function updateShootingStars() {
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const s = shootingStars[i];
    s.userData.life++;
    
    s.position.addScaledVector(s.userData.dir, s.userData.speed);
    
    s.userData.mat.uniforms.time.value += 0.05;

    const progress = s.userData.life / s.userData.maxLife;
    
    s.userData.mat.uniforms.opacity.value = 1.0;

    if (s.userData.life >= s.userData.maxLife) {
      scene.remove(s);
      s.userData.mat.dispose();
      s.children.forEach(child => {
        if(child.geometry) child.geometry.dispose();
      });
      shootingStars.splice(i, 1);
    }
  }
  if (Math.random() < 0.02) {
    if (Math.random() < 0.15) {
      spawnCometSwarm();
    } else {
      spawnShootingStar();
    }
  }
}
