'use strict';
const path = require('path');

exports.config = sharedConfig();

function sharedConfig() {
    const config = {
        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),
        cucumberOpts: {
            compiler: "ts:ts-node/register",
            require: [
                path.resolve(process.cwd(), './test/e2e/src/*.ts')
            ],
            format: 'pretty',
            tags: ''
        },
        directConnect: true,
        capabilities: {
          'browserName': 'chrome',
          'chromeOptions': {
            'args': [
              '--show-fps-counter',
              '--no-default-browser-check',
              '--no-first-run',
              '--disable-default-apps',
              '--disable-popup-blocking',
              '--disable-translate',
              '--disable-background-timer-throttling',
              '--disable-renderer-backgrounding',
              '--disable-device-discovery-notifications',
              '--headless',
              '--no-gpu'
              /* enable these if you'd like to test using Chrome Headless
              */
            ]
          }
        },
        specs: ['features/*.feature'],

        plugins: [{
            package: require.resolve('aurelia-protractor-plugin')
        }],

        allScriptsTimeout: 88000,
        disableChecks: true,

        onPrepare: function() {
            require('ts-node').register({ compilerOptions: { module: 'commonjs' }, disableWarnings: true, fast: true });
        },

        // From `protractor-cucumber-framework`, allows cucumber to handle the 199 exception and record it appropriately
        ignoreUncaughtExceptions: true
    };

    return config;
}
