const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const rc = require('rc');

const optimization = require('./optimization');

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
