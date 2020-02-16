const merge = require('webpack-merge');
const commonConfig = require('./common');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CopyPlugin([
      { from: 'build/templates/404.html' },
    ]),
  ],
});
