// ══════════════════════════════════════════════════════════
//  COMETS SYSTEM  |  js/systems/comets.js
//  Sprite-based comets using cometa.png
//  - Spawns from the RIGHT, falls to the LEFT
//  - Only the image sprite, no trail
// ══════════════════════════════════════════════════════════

const CometSystem = (() => {
  const _comets = [];
  let _scene = null;
  let _camera = null;
  let _cometTexture = null;

  function init(scene, camera) {
    _scene = scene;
    _camera = camera;
    _cometTexture = new THREE.TextureLoader().load('img/textures/cometa.png');
  }

  function spawn() {
    if (!_scene || !_camera || !_cometTexture) return;

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

    // Spawn always from the RIGHT side of the CAMERA's view
    // Camera looks down -Z in its local space, right is +X, up is +Y
    const offset = new THREE.Vector3(
      200 + Math.random() * 100,     // Right
      50 + Math.random() * 100,      // Up
      -(150 + Math.random() * 150)   // Forward
    );
    // Apply camera rotation
    offset.applyQuaternion(_camera.quaternion);
    
    // Set position relative to camera
    const startPos = _camera.position.clone().add(offset);
    sprite.position.copy(startPos);

    // Direction: right → left, downward, relative to camera orientation
    const localDir = new THREE.Vector3(
      -(0.8 + Math.random() * 0.4),   // strong left
      -(0.2 + Math.random() * 0.3),   // slight downward
      -(Math.random() * 0.3)          // slight forward
    ).normalize();
    const dir = localDir.applyQuaternion(_camera.quaternion).normalize();

    // Much faster speed
    const speed = 12.0 + Math.random() * 6.0;
    const maxLife = 80 + Math.random() * 40; // Shorter life since it's faster

    // Stronger light to look more real (white/purple)
    const lightColor = new THREE.Color().lerpColors(
      new THREE.Color(0xffffff), // White
      new THREE.Color(0xb366ff), // Purple
      Math.random() * 0.5 + 0.2
    );
    // Increased intensity to 10.0 and distance to 400
    const light = new THREE.PointLight(lightColor, 10.0, 400);
    sprite.add(light); // Attach light to sprite so it moves with it

    _scene.add(sprite);
    _comets.push({ sprite, light, dir, speed, life: 0, maxLife });
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
      let opacity = 1.0;
      if (progress < 0.15) {
        opacity = progress / 0.15;
      } else if (progress > 0.7) {
        opacity = 1 - (progress - 0.7) / 0.3;
      }
      
      c.sprite.material.opacity = opacity;
      if (c.light) {
          // Adjust light intensity relative to fade
          c.light.intensity = opacity * 10.0;
      }

      if (c.life >= c.maxLife) {
        _scene.remove(c.sprite);
        if (c.light) c.sprite.remove(c.light);
        c.sprite.material.dispose();
        if (c.light) c.light.dispose();
        _comets.splice(i, 1);
      }
    }
  }

  return { init, spawn, update };
})();
