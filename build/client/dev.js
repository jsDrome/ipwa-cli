const merge = require('webpack-merge');
const commonConfig = require('./common');
const path = require('path');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../../_dist'),
    compress: true,
    port: 9000,
  },
});