import path from 'path';

import StyleLintPlugin from 'stylelint-webpack-plugin';

// Import Configuration.
const paths = require('../utils/paths');

/**
 * StyleLintPlugin()
 * A webpack plugin to lint your CSS/Sass code using stylelint.
 */
export const styleLintPlugin = new StyleLintPlugin({
    emitErrors: true,
    emitWarning: true,
    context: paths.src,
    extensions: ['.css'],
    failOnError: !process.env.NODE_ENV === 'development',
    failOnWarning: !process.env.NODE_ENV === 'development',
    lintDirtyModulesOnly: process.env.NODE_ENV === 'development',
    configFile: path.resolve(__dirname, '../../.stylelintrc.js'),
});
