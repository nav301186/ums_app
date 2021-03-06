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

  app.import('bower_components/bootstrap/bower_components/jquery/dist/jquery.js');

    app.import('bower_components/tether/dist/css/tether.css');
    app.import('bower_components/tether/dist/js/tether.js');
    app.import('bower_components/bootstrap/dist/css/bootstrap.css');
    app.import('bower_components/bootstrap/dist/js/bootstrap.js');
    app.import('bower_components/jquery/dist/jquery.js');

    app.import('bower_components/gsap/src/uncompressed/jquery.gsap.js');
    app.import('bower_components/gsap/src/uncompressed/TimelineLite.js');
    app.import('bower_components/gsap/src/uncompressed/TimelineMax.js');
    app.import('bower_components/gsap/src/uncompressed/TweenMax.js');
    app.import('bower_components/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js');
    app.import('bower_components/scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js');
    app.import('bower_components/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
    app.import('bower_components/gsap/src/uncompressed/plugins/ScrollToPlugin.js');
    app.import('bower_components/owlcarousel/owl-carousel/owl.carousel.js');
    app.import('bower_components/owlcarousel/owl-carousel/owl.carousel.css');
    app.import('bower_components/owlcarousel/owl-carousel/owl.theme.css');
    app.import('bower_components/font-awesome/css/font-awesome.css');
    return app.toTree();
};
