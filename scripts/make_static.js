var page = require('webpage').create(),
    system = require('system');

page.viewportSize = {
  width: 480,
  height: 320
};

if (system.args.length === 1) {
  console.log('Usage: make_static.js <target URL>');
  phantom.exit(1);
} else {
      page.open(system.args[1], function() {
      page.render('./1-initial.png');
      page.onCallback = function() {
      page.render('./2-loaded.png');
      console.log(page.content);
      phantom.exit();
    };
  });
}

'callPhantom' in window && window.callPhantom();
