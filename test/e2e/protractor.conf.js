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
                path.resolve(process.cwd(), './tmp/*.ts')
            ],
            format: 'pretty',
            tags: ''
        },
	capabilities: {
	    'browserName': 'chrome'
	},
        specs: ['features/*.feature'],

	plugins: [{
	    package: require.resolve('aurelia-protractor-plugin')
	}],
        
        allScriptsTimeout: 11000,
        disableChecks: true,

        // From `protractor-cucumber-framework`, allows cucumber to handle the 199 exception and record it appropriately
        ignoreUncaughtExceptions: true
    };

    return config;
}
