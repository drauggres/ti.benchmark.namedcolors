try {
  const start = Date.now();

  // Parse 'semantic.colors.json', then fetch each color by name
  const colors = require('/colors-with-fetch');
  
  // Named colors
  // const colors = require('/colors-only-name');
  console.log(`require: ${Date.now() - start}ms`);

  const create = Date.now();
  const win = Ti.UI.createWindow({
    backgroundColor: colors.getColor('primaryBackground')
  });
  const scroll = Ti.UI.createScrollView({
    layout: 'horizontal',
    contentWidth: 300,
    scrollType: 'vertical',
    width: Ti.UI.FILL,
    height: Ti.UI.FILL
  });
  win.add(scroll);
  for (let i = 0; i < 512; i++) {
    const view = Ti.UI.createView({
      width: 20,
      height: 20,
      backgroundColor: colors.getColor(`color_${i}`)
    })
    scroll.add(view);
  }
  console.log(`create: ${Date.now() - create}ms`);

  win.addEventListener('postlayout', () => {
    console.log(`start: ${Date.now() - start}ms`);
  });
  win.open();
} catch (e) {
  console.error(e.message);
  console.error(e.stack);
}
