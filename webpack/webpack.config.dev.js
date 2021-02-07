const paths = require('./utils/paths');
const baseFile = require('./webpack.config.base');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

module.exports = merge(baseFile, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        // historyApiFallback: true,
        contentBase: paths.build,
        open: true,
        compress: true,
        // hot: true,
        port: 8080,
        overlay: {
            warnings: true,
            errors: true,
        },
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
    ],
});
