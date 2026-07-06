// ══════════════════════════════════════════════════════════
//  COMETS SYSTEM  |  js/systems/comets.js
//  Sprite-based comets using cometa.png
//  - Spawns from the RIGHT, falls to the LEFT
//  - Only the image sprite, no trail
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

    const mat = new THREE.SpriteMaterial({
      map: _cometTexture,
      transparent: true,
      depthWrite: false,
      opacity: 1.0,
    });

    const sprite = new THREE.Sprite(mat);

    // Big size
    const size = 12 + Math.random() * 8;
    sprite.scale.set(size * 1.8, size, 1);

    // Spawn always from the RIGHT side of the scene
    const startX = 250 + Math.random() * 100;          // far right
    const startY = 80 + Math.random() * 180;            // random height
    const startZ = (Math.random() - 0.5) * 200;        // random depth

    sprite.position.set(startX, startY, startZ);

    // Direction: right → left, with a downward arc
    const dir = new THREE.Vector3(
      -(0.7 + Math.random() * 0.3),   // strong left
      -(0.2 + Math.random() * 0.3),   // slight downward
      (Math.random() - 0.5) * 0.1     // minimal Z wobble
    ).normalize();

    const speed = 1.8 + Math.random() * 1.5;
    const maxLife = 120 + Math.random() * 60;

    _scene.add(sprite);
    _comets.push({ sprite, dir, speed, life: 0, maxLife });
  }

  function update() {
    // Spawn ~every 2-3 seconds at 60fps
    if (Math.random() < 0.008) spawn();

    for (let i = _comets.length - 1; i >= 0; i--) {
      const c = _comets[i];
      c.life++;

      const progress = c.life / c.maxLife;

      // Move sprite
      c.sprite.position.addScaledVector(c.dir, c.speed);

      // Fade in first 15%, fade out last 30%
      if (progress < 0.15) {
        c.sprite.material.opacity = progress / 0.15;
      } else if (progress > 0.7) {
        c.sprite.material.opacity = 1 - (progress - 0.7) / 0.3;
      } else {
        c.sprite.material.opacity = 1.0;
      }

      if (c.life >= c.maxLife) {
        _scene.remove(c.sprite);
        c.sprite.material.dispose();
        _comets.splice(i, 1);
      }
    }
  }

  return { init, spawn, update };
})();
