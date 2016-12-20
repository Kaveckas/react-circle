const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src'),
    output: {
        path: __dirname,
        filename: path.resolve(__dirname, './dist/swipe.js')
    },
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }
    ]
};
