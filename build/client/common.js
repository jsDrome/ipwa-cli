const path = require('path');

module.exports = {
  entry: {
    app: './src/client/web/web.js',
  },
  output: {
    path: path.resolve(__dirname, `../../_dist`),
    filename: '[name].bundle.js',
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
};
