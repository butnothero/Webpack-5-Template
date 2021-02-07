const paths = require('../utils/paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = cleanWebpackPlugin = new CleanWebpackPlugin({
    root: paths.build,
});
