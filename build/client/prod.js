const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorPluginOptions: {
        preset: [ 'default', { discardComments: { removeAll: true } } ],
      },
    }),
  ],
});
