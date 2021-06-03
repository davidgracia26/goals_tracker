/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');
const htmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.join(root, 'index.html'),
  inject: 'head',
});
module.exports = {
  entry: {
    main: ['core-js/stable', path.resolve(root, 'index.js')],
  },
  output: {
    pathinfo: true,
    path: path.resolve(outputPath),
    filename: 'js/speakers.[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new ESLintPlugin(),
    htmlPlugin,
  ],
  devServer: {
    contentBase: outputPath,
    publicPath: '/',
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: root,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
    ],
  },
};
