module.exports = {
    plugins: [
        require('postcss-preset-env')({
            autoprefixer: {
                grid: true,
            },
            browsers: ['ie >= 9', 'last 4 version'],
        }),
    ],
};