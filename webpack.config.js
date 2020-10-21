const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

console.log('prod ' +isProd, 'dev ' +isDev)

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
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200,
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        open: true,
        hot: isDev
    },
    plugins:[
        new HtmlWebpackPlugin({template: 'index.html'}),
        new MiniCssExtractPlugin({filename:'bundle.css'}),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist' ) }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        //options: {hmr: isDev},
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    }
}
