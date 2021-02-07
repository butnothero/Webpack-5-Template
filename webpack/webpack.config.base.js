const paths = require('./utils/paths');

const copyWebpackPlugin = require('./plugins/copyWebpackPlugin');
const styleLintPlugin = require('./plugins/styleLintPlugin');
const cleanWebpackPlugin = require('./plugins/cleanWebpackPlugin');

const htmlPages = require('./modules/pug');

module.exports = {
    entry: [paths.src + '/index.ts'],

    output: {
        path: paths.build,
        publicPath: '',
        filename: `[name].[contenthash].bundle.js`,
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader'],
            },

            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:
                            {
                                sourceMap: true,
                                importLoaders: 1,
                            },
                    },

                    {
                        loader: 'postcss-loader',
                        options:
                            {
                                sourceMap: true,
                            },
                    },

                    {
                        loader: 'sass-loader',
                        options:
                            {
                                sourceMap: true,
                            },
                    },
                ],
            },

            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },

    plugins: [
        cleanWebpackPlugin,
        copyWebpackPlugin,
        styleLintPlugin,
        ...htmlPages
    ],
}
