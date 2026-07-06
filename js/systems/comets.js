// ══════════════════════════════════════════════════════════
//  COMETS SYSTEM  |  js/systems/comets.js
//  Sprite-based comets using cometa.png, always face camera
// ══════════════════════════════════════════════════════════

const CometSystem = (() => {
  const _comets = [];
  let _scene = null;
  let _cometTexture = null;

  function init(scene) {
    _scene = scene;
    _cometTexture = new THREE.TextureLoader().load('img/textures/cometa.png');
  }

  function spawn() {
    if (!_scene || !_cometTexture) return;

    // Head sprite (the image)
    const headMat = new THREE.SpriteMaterial({
      map: _cometTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 1.0,
    });
    const head = new THREE.Sprite(headMat);
    const size = 3 + Math.random() * 4;
    head.scale.set(size, size, 1);

    // Start position
    const start = new THREE.Vector3(
      (Math.random() - 0.5) * 600,
      80 + Math.random() * 250,
      (Math.random() - 0.5) * 600
    );
    head.position.copy(start);

    // Direction: mostly downward with random horizontal component
    const dir = new THREE.Vector3(
      (Math.random() - 0.5) * 1.2,
      -(0.4 + Math.random() * 0.6),
      (Math.random() - 0.5) * 1.2
    ).normalize();

    const speed = 2.5 + Math.random() * 3.5;
    const maxLife = 80 + Math.random() * 60;

    // Tail: a line of fading points
    const trailCount = 24;
    const trailPositions = new Float32Array(trailCount * 3);
    for (let i = 0; i < trailCount; i++) {
      const p = start.clone().addScaledVector(dir, -i * 1.8);
      trailPositions[i * 3]     = p.x;
      trailPositions[i * 3 + 1] = p.y;
      trailPositions[i * 3 + 2] = p.z;
    }
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    const trailMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const trail = new THREE.Line(trailGeo, trailMat);

    _scene.add(head);
    _scene.add(trail);

    _comets.push({ head, trail, dir, speed, life: 0, maxLife, start: start.clone() });
  }

  function update() {
    // Spawn more frequently: ~every 0.5-1 second at 60fps
    if (Math.random() < 0.04) spawn();

    for (let i = _comets.length - 1; i >= 0; i--) {
      const c = _comets[i];
      c.life++;
      const progress = c.life / c.maxLife;
      const fade = 1 - progress;

      // Move head
      c.head.position.addScaledVector(c.dir, c.speed);
      c.head.material.opacity = fade;

      // Move & shrink head
      const s = (3 + c.speed) * fade;
      c.head.scale.set(s * 2, s * 2, 1);

      // Shift trail positions forward
      const posArr = c.trail.geometry.attributes.position.array;
      for (let j = posArr.length - 3; j >= 3; j -= 3) {
        posArr[j]     = posArr[j - 3];
        posArr[j + 1] = posArr[j - 2];
        posArr[j + 2] = posArr[j - 1];
      }
      posArr[0] = c.head.position.x;
      posArr[1] = c.head.position.y;
      posArr[2] = c.head.position.z;
      c.trail.geometry.attributes.position.needsUpdate = true;
      c.trail.material.opacity = fade * 0.5;

      if (c.life >= c.maxLife) {
        _scene.remove(c.head);
        _scene.remove(c.trail);
        c.head.material.dispose();
        c.trail.geometry.dispose();
        c.trail.material.dispose();
        _comets.splice(i, 1);
      }
    }
  }

  return { init, spawn, update };
})();
