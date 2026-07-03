const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Find the shooting stars block
const startMarker = '// ── SHOOTING STARS ──';
const endMarker = '\r\n\r\n// ── COMET ──';

const startIdx = code.indexOf(startMarker);
const endIdx = code.indexOf('// ── COMET ──');

if (startIdx !== -1 && endIdx !== -1) {
  const newBlock = `// ── SHOOTING STARS + COMETS (via js/comet.js) ──
let cometSystem = null;
function initCometSystem() {
  cometSystem = new CometSystem(scene);
}
function updateShootingStars(time) {
  if (cometSystem) cometSystem.update(time);
}

`;
  code = code.substring(0, startIdx) + newBlock + code.substring(endIdx);
  fs.writeFileSync('script.js', code);
  console.log('replaced from', startIdx, 'to', endIdx);
} else {
  console.log('Markers not found. startIdx:', startIdx, 'endIdx:', endIdx);
}
