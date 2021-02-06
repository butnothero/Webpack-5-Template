const styleLintPlugin =  require('../plugins/styleLintPlugin');

const paths = require('../utils/paths');

const fs = require('fs');

const PAGES_DIR = `${paths.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'));

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [paths.src + '/index.ts'],

    output: {
        path: paths.build,
        publicPath: '',
        filename: `[name].[contenthash].bundle.js`
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },

            {
              test: /\.tsx?$/,
                use: ['ts-loader']
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
                                importLoaders: 1
                            }
                    },

                    {
                        loader: 'postcss-loader',
                        options:
                            {
                                sourceMap: true
                            }
                    },

                    {
                        loader: 'sass-loader',
                        options:
                            {
                                sourceMap: true
                            }
                    }
                ]
            },

            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },

            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            },
        ]
    },

    plugins: [
        styleLintPlugin,

        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
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
        }),

        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`
        }))
    ]
}
