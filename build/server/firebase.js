const merge = require('webpack-merge');
const prodConfig = require('./prod');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(prodConfig, {
  entry: {
    index: [ './src/server/firebase.js' ],
  },
  plugins: [
    new CopyPlugin([
      { from: '.configrc' },
    ]),
  ],
});
