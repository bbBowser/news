// Karma configuration
// Generated on Thu May 15 2014 04:01:02 GMT+0200 (CEST)

module.exports = function (config) {
    'use strict';

    config.set({

        // base path that will be used to resolve all patterns
        // (eg. files, exclude)
        basePath: '',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'vendor/js-url/url.min.js',
            'vendor/es6-shim/es6-shim.min.js',
            'vendor/jquery/dist/jquery.js',
            'vendor/momentjs/min/moment-with-locales.js',
            'vendor/angular/angular.js',
            'vendor/angular-mocks/angular-mocks.js',
            'vendor/angular-route/angular-route.js',
            'vendor/angular-sanitize/angular-sanitize.js',
            'tests/unit/stubs/App.ts',
            'tests/unit/stubs/OC.ts',
            'controller/**/*.ts',
            'filter/**/*.ts',
            'service/**/*.ts',
            'directive/**/*.ts',
            'tests/unit/**/*Spec.js',
        ],

        preprocessors: {
            '**/*.ts': ['typescript']
        },
        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                sourceMap: false,
                target: 'ES5',
                noImplicitAny: false,
                removeComments: true,
                concatenateOutput: false,
                sortOutput: true
            },
            // extra typing definitions to pass to the compiler (globs allowed)
            typings: [
                'typings/browser.d.ts',
                'typings/owncloud.d.ts'
            ],
            // transforming the filenames
            transformPath: function(path) {
                return path.replace(/\.ts$/, '.js');
            }
        },



        // list of files to exclude
        exclude: [

        ],

        coverageReporter: {
            type: 'lcovonly',
            dir: 'coverage/',
            file: 'coverage.lcov'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage', 'progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any
        // file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers:
        // https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
