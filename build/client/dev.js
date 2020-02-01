const merge = require('webpack-merge');
const commonConfig = require('./common');
const path = require('path');
const rc = require('rc');

const config = rc('jsdrome');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../../_dist'),
    compress: true,
    port: config.client.port,
    writeToDisk: true,
    quiet: true,
  },
});