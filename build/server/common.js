const path = require('path');
const nodeExternals = require('webpack-node-externals');
const rc = require('rc');

const config = rc('config');

module.exports = {
  entry: {
    index: './src/server/server.js',
  },
  output: {
    path: path.resolve(__dirname, `../../${config.build.client.dist}`),
    libraryTarget: 'commonjs2',
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
  target: 'node',
  externals: nodeExternals(),
};