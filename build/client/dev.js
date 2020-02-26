const merge = require('webpack-merge');
const path = require('path');
const rc = require('rc');
const commonConfig = require('./common');

const config = rc('config');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, `../../_dist`),
    compress: true,
    port: config.build.client.port,
    writeToDisk: true,
    quiet: true,
  },
  devtool: 'inline-source-map',
});
