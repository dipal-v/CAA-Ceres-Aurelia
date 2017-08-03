// An example configuration file.
exports.config = {
	framework: 'custom',
	frameworkPath: 'node_modules/protractor-cucumber-framework',
	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome'
	},
	
	specs: ['features/*.feature'],
	
	plugins: [{
		package: require.resolve('aurelia-protractor-plugin')
	}],
	
	cucumberOpts: {
		compiler: "ts:ts-node/register",
		format: 'pretty',
		require: 'features/support/*.ts',
		tags: ''
	}
};
