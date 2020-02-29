const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/server/server.js',
  },
  output: {
    path: path.resolve(__dirname, `../../_dist`),
    libraryTarget: 'commonjs2',
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
    new CopyPlugin([
      { from: 'build/templates/404.html' },
      { from: '.configrc' },
      { from: 'assets', to: 'img' },
    ]),
  ],
  target: 'node',
  externals: nodeExternals(),
};
