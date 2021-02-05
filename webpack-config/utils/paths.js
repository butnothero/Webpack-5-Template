const PATHS = require('path');

module.exports = {
    /**
     * PostCSS config file
     */
    postcssConfig: PATHS.resolve(__dirname, '../../postcss.config.js'),

    /**
     * Source files
     */
    src: PATHS.resolve(__dirname, '../../src'),

    /**
     * Production build files
     */
    build: PATHS.resolve(__dirname, '../../dist'),

    /**
     * Assets directory name
     */
    assets: '',
}