const merge = require('webpack-merge');
const prodConfig = require('./prod');

module.exports = merge(prodConfig, {
  entry: {
    index: [ './src/server/firebase.js' ],
  },
});
