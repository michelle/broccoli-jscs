var JSCSFilter = require('./index');
var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name: 'broccoli-jscs',

  included: function(app) {
    this._super.included.apply(this, arguments);

    if (app.tests) {
      app.registry.add('js', {
        name: 'broccoli-jscs',
        ext: 'js',
        toTree: function(tree, inputPath, outputPath, options) {
          return pickFiles(new JSCSFilter(tree, app.options.jscsOptions), {
            srcDir: '/',
            destDir: outputPath + '/tests/'
		  });
        }
      });
    }
  }
};