const colors = {};

if (Ti.Platform.osname === 'android') {
  const mode = Ti.UI.Android.nightModeStatus;
  if (typeof mode !== 'undefined') {
    if (mode === Ti.UI.Android.MODE_NIGHT_YES) {
      Ti.UI.semanticColorType = Ti.UI.SEMANTIC_COLOR_TYPE_DARK;
    } else {
      Ti.UI.semanticColorType = Ti.UI.SEMANTIC_COLOR_TYPE_LIGHT;
    }
  }
} else {
  if (Ti.App.iOS.userInterfaceStyle === Ti.App.iOS.USER_INTERFACE_STYLE_DARK) {
    Ti.UI.semanticColorType = Ti.UI.SEMANTIC_COLOR_TYPE_DARK;
  } else {
    Ti.UI.semanticColorType = Ti.UI.SEMANTIC_COLOR_TYPE_LIGHT;
  }
}

console.log(`semanticColorType: ${Ti.UI.semanticColorType}`);
console.log(`userInterfaceStyle: ${Ti.App.iOS.userInterfaceStyle}`);

const fileName = 'semantic.colors.json';
const colorsetFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName);
if (colorsetFile.exists()) {
  const colorset = JSON.parse(colorsetFile.read().text);
  Object.keys(colorset).forEach(name => {
    colors[name] = Ti.UI.fetchSemanticColor(name);
  });
}

const getColor = (color) => {
  return colors[color];
}

exports.getColor = getColor;
