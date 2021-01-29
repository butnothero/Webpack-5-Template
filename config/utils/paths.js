const PATHS = require('path');

module.exports = {
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