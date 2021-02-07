const paths = require('../utils/paths');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = copyWebpackPlugin = new CopyWebpackPlugin({
    patterns: [
        {
            from: paths.src + '/static',
            to: paths.assets + 'static',
            globOptions:
                {
                    ignore: ['*.DS_Store']
                }
        },

        {
            from: paths.src + '/php',
            to: paths.assets + 'php',
            globOptions:
                {
                    ignore: ['*.DS_Store']
                }
        },

        {
            from: paths.src + '/img',
            to: paths.assets + 'img',
            globOptions:
                {
                    ignore: ['*.DS_Store']
                }
        },

        {
            from: paths.src + '/fonts',
            to: paths.assets + 'fonts',
            globOptions:
                {
                    ignore: ['*.DS_Store']
                }
        },
    ]
})
