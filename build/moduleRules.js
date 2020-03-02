const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.(le|sa|sc|c)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.(svg|png|jpg|jpeg|gif|ico|webp)$/,
    loader: 'file-loader',
    options: {
      name: 'img/[name].[ext]',
    },
  },
  {
    test: /\.md$/,
    exclude: /node_modules/,
    use: {
      loader: 'raw-loader',
    },
  },
];
