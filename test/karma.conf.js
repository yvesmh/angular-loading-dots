module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/loading-dots.js',
      'test/spec/loading-dots-spec.js'
    ],

    exclude: [],

    port: 8080,

    browsers: [
      'PhantomJS'
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    singleRun: true,

    colors: true,

    logLevel: 'INFO'

  });

};
