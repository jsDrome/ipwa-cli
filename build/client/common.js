const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rc = require('rc');

const config = rc('config');

module.exports = {
  entry: {
    app: './src/client/web/index.js',
  },
  output: {
    path: path.resolve(__dirname, `../../${config.build.client.dist}`),
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