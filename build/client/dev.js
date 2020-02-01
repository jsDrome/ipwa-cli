const merge = require('webpack-merge');
const commonConfig = require('./common');
const path = require('path');
const rc = require('rc');

const jsdromeConfig = rc('jsdrome');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, `../../${jsdromeConfig.build.client.dist}`),
    compress: true,
    port: jsdromeConfig.build.client.port,
    writeToDisk: true,
    quiet: true,
  },
});