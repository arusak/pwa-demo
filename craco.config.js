const {POSTCSS_MODES} = require('@craco/craco');
const ReplacePlugin = require('webpack-plugin-replace');
const CracoWorkboxPlugin = require('craco-workbox');
const PwaManifestPlugin = require('webpack-pwa-manifest');
const { resolve } = require('path');

module.exports = {
  style: {
    postcss: {
      mode: POSTCSS_MODES.file
    }
  },
  plugins: [{
    plugin: CracoWorkboxPlugin,
  }],
  webpack: {
    plugins: {
      add: [
        // new ReplacePlugin({
        //   include: /node_modules\/?\\?workbox-.*\.js/,
        //   values: { 'process.env.NODE_ENV !== \'production\'': 'true' }
        // }),
        new PwaManifestPlugin({
          name: 'PWA Demo',
          short_name: 'PWA Demo',
          orientation: 'portrait',
          theme_color: '#282c34',
          background_color: '#282c34',
          display: 'standalone',
          icons: [
            { src: resolve('./public/android-chrome-192x192.png'), type: 'image/png', size: '192x192' },
            { src: resolve('./public/android-chrome-512x512.png'), type: 'image/png', size: '512x512' },
          ],
        }),
      ],

    },
  },
};
