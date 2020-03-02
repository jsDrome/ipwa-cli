const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const moduleRules = require('../moduleRules');

module.exports = {
  entry: {
    index: './src/server/server.js',
  },
  output: {
    path: path.resolve(__dirname, `../../_dist`),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: moduleRules,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/app.css",
      chunkFilename: "css/[id].css",
    }),
    new CopyPlugin([
      { from: 'build/templates/404.html' },
      { from: '.configrc' },
      { from: 'assets', to: 'img' },
    ]),
  ],
  target: 'node',
  externals: nodeExternals(),
};
