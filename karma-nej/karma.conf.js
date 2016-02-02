// Karma configuration

// Generated on Thu Jan 28 2016 14:45:37 GMT+0800 (CST)

var path = require('path');

module.exports = function(config) {



  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'nej'],



    // list of files / patterns to load in the browser
    files: [
        {pattern: 'lib/**/*.js', included: false},
        {pattern: 'src/**/*.js', included: false},
        {pattern: 'src/**/*.html', included: false},
        {pattern: 'test/**/*Spec.js', included: false},
        'test/test-main.js',
    ],



    // list of files to exclude
    exclude: [
        'src/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    nejOptions: {
        root: path.join(__dirname, 'nej/'),
        alias: {
            'pro': './src/'
        }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    coverageReporter: {
      // specify a common output directory
      // dir: 'coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        // { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        // { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        // { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        // { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        // { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary' },
      ]
    }

  })
}
