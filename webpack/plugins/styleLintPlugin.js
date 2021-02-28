const path = require('path');

const StyleLintPlugin = require('stylelint-webpack-plugin');

// Import Configuration.
const paths = require('../utils/paths');

/**
 * StyleLintPlugin()
 * A webpack plugin to lint your CSS/Sass code using stylelint.
 */
module.exports = styleLintPlugin = new StyleLintPlugin({
	emitErrors: true,
	emitWarning: true,
	context: paths.src,
	extensions: ['.scss', '.sass', '.css'],
	failOnError: !process.env.NODE_ENV === 'development',
	failOnWarning: !process.env.NODE_ENV === 'development',
	lintDirtyModulesOnly: process.env.NODE_ENV === 'development',
	configFile: path.resolve(__dirname, '../../.stylelintrc.js'),
});
