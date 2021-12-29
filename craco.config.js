const ReplacePlugin = require('webpack-plugin-replace');
const CracoWorkboxPlugin = require('craco-workbox');

module.exports = {
  plugins: [{
    plugin: CracoWorkboxPlugin
  }],
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
