var path = require('path');

module.exports = {
    devtool: 'source-map',

    entry: [
        './src/App.js'
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
};