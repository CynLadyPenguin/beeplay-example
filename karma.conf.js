module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
    },
    files: [
      'src/*.js',
      'test.js'
    ],
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor',
      'karma-chai',
      'karma-sinon-chai'
    ],
    reporters: ['progress'],
    browsers: ['Chrome'],
    port: 9876,
    singleRun: true
  });
};
