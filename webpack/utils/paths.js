const path = require('path');

module.exports = {
    /**
     * PostCSS config file
     */
    postcssConfig: path.resolve(__dirname, '../../postcss.config.js'),

    /**
     * Source files
     */
    src: path.resolve(__dirname, '../../src'),

    /**
     * Production build files
     */
    build: path.resolve(__dirname, '../../dist'),

    /**
     * Pug pages
     */
    pages: path.resolve(__dirname, '../../src/pug/pages/'),

    /**
     * Assets directory name
     */
    assets: '',
}
