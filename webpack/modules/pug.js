const paths = require('../utils/paths');

const htmlWebpackPlugin = require('../plugins/htmlWebpackPlugin');

const fs = require('fs');

const pugPages = fs.readdirSync(paths.pages).filter(filename => filename.endsWith('.pug'));

const htmlPages = pugPages.map(pugPage => new htmlWebpackPlugin({
    template: `${paths.pages + '/' + pugPage}`,
    filename: `./${pugPage.replace(/\.pug/, '.html')}`,
}))

module.exports = htmlPages;
