const litPlugin = require('@lit-labs/eleventy-plugin-lit');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(litPlugin, {
		componentModules: [
			'js/demo-greeter.js',
			'js/other-component.js'
		]
	});
};