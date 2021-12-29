const ReplacePlugin = require('webpack-plugin-replace');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ReplacePlugin({
          include: /node_modules\/workbox/,
          values: { 'process.env.NODE_ENV !== \'production\'': 'true' }
        })
      ],

    }
  }
};
