/* global __dirname */

import path from 'path';

module.exports = {
    entry: {
        preload: './target/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '../dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    module: {
        loaders: [
        {
            test: /src\/\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }
        ]
    }
};