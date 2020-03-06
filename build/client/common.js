const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const rc = require('rc');

const optimization = require('./optimization');
const moduleRules = require('../moduleRules');

const { seed } = rc('config');

module.exports = {
  entry: {
    app: [ 'babel-polyfill', './src/client/web/web.js' ],
  },
  output: {
    path: path.resolve(__dirname, `../../_dist`),
    filename: '[name].bundle.js',
  },
  module: {
    rules: moduleRules,
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../../src/client/web/components'),
      Pages: path.resolve(__dirname, '../../src/client/web/pages'),
      Store: path.resolve(__dirname, '../../src/client/store'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/app.css",
      chunkFilename: "css/[id].css",
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: 'bundle.html',
    }),
    new Visualizer({
      filename: 'visualizer.html',
    }),
    new ManifestPlugin({
      seed,
    }),
    new RobotstxtPlugin(),
  ],
  optimization,
};
