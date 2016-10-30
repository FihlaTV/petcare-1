/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/css/bootstrap-theme.min.css');
  app.import('vendor/css/bootstrap.min.css');
  app.import('vendor/css/bootstrap-imageupload.min.css');
  app.import('vendor/css/bootstrap-imageupload.css');
  app.import('vendor/js/bootstrap.min.js');
  app.import('vendor/js/bootstrap-imageupload.min.js');
  app.import('vendor/js/bootstrap-imageupload.js');
  app.import('vendor/css/bootstrap-datetimepicker.min.css');
  app.import('vendor/js/moment-with-locales.js');
  app.import('vendor/js/bootstrap.min.js');
  app.import('vendor/js/bootstrap-datetimepicker.js');

  return app.toTree();
};
