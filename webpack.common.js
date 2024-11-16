const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {

    entry: './src/js/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer:{
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg|webp|ico)$/, use: {
                  loader: 'file-loader',
                  options: { name: '[name].[ext]' }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
             },
             {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: ['file-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },


    plugins: [
        new HtmlWebpackPlugin({
            // favicon: "./src/img/icon.png",
            template: 'template.html'
        }),
        new Dotenv({safe: true, systemvars: true})
    ]

}