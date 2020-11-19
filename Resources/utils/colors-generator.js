let id = 0;
const colors = {};
function getRandom() {
  return (Math.random() * 256) | 0;
}

function LightenDarken(value, amt) {
  value += amt;

  if (value > 255) {
    value = 255;
  } else if  (value < 0) {
    value = 0;
  }
  return value;
}

/**
 * @param {number} number
 * @returns {string}
 */
function toHex(number) {
  return number.toString(16).padStart(2, '0');
}

for (let i = 0; i < 8; i++) {
  const red = getRandom();
  const redLight = toHex(red);
  const redDark = toHex(LightenDarken(red, -20));
  for (let j = 0; j < 8; j++) {
    const green = getRandom();
    const greenLight = toHex(green);
    const greenDark = toHex(LightenDarken(green, -20));
    for (let k = 0; k < 8; k++) {
      const blue = getRandom();
      const blueLight = toHex(blue);
      const blueDark = toHex(LightenDarken(blue, -20));
      const light = `#${redLight}${greenLight}${blueLight}`;
      const dark = `#${redDark}${greenDark}${blueDark}`;
      colors[`color_${id}`] = {light, dark};
      id++;
    }
  }
}
colors['primaryBackground'] = {
  light: '#ffffff',
  dark: '#000000'
}

const fs = require('fs');
fs.writeFileSync('semantic.colors.json', JSON.stringify(colors, null, '  '));
