const merge = require('webpack-merge');
const commonConfig = require('./common');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      BUILD_NODE_ENV: JSON.stringify('development'),
    }),
  ],
});
