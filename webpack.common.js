const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(css)$/,
          use: [
            {
              loader: "style-loader", // crea nodos de estilo a partir de strings JS
            },
            {
              loader: "css-loader", // traduce CSS en CommonJS
            },
            {
              loader: "postcss-loader", // procesa los archivos CSS con PostCSS
            },
          ],
        },
        
        {
          test: /\.(png|svg|jpg|gif|jpeg|webp)$/, use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        }, //for images
        { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['file-loader'] } //for fonts
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
       /*  favicon: '4geeks.ico', */
        template: 'template.html'
    }),
    new Dotenv({ safe: true, systemvars: true })
  ]
};