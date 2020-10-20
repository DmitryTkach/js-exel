const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    resolve: {
        extensions: ['.js'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({template: 'index.html'}),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist' ) }
            ]
        }),
        new MiniCssExtractPlugin({filename: path.resolve(__dirname, 'bundle.css')})
    ]
}
