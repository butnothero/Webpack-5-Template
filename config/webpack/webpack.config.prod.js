const paths = require('../utils/paths');
const baseFile = require('./webpack.config.base');

const {merge} = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(baseFile, {
    mode: 'production',

    devtool: false,

    output: {
        path: paths.build,
        publicPath: './',
        filename: paths.assets + 'js/[name].[contenthash].js',
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: paths.assets + 'css/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
        runtimeChunk: {
            name: 'runtime',
        },
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});