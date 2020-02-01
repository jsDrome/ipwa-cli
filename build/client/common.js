const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rc = require('rc');

const jsdromeConfig = rc('jsdrome');

module.exports = {
  entry: {
    app: './src/client/client.js',
  },
  output: {
    path: path.resolve(__dirname, `../../${jsdromeConfig.build.client.dist}`),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My website',
      template: path.resolve(__dirname, '../templates/client.html'),
    }),
  ],
};