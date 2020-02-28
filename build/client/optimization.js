/* eslint-disable no-magic-numbers */
module.exports = {
  splitChunks: {
    automaticNameDelimiter: '-',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/](.*?)[\\/]/,
        name: 'npm',
        chunks: 'all',
      },
    },
  },
};
