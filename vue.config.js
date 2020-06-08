module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/flat-scan-vue-pwa/' : '/',
  pwa: {
    name: 'flatScan',
    themeColor: '#FFF9E8',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // manifestPath: 'public/manifest.json',
    manifestPath: 'manifest.json',
    manifestOptions: {
      start_url: './',
      display: 'standalone',
      icons: [
        {
          src: './img/icons/manifest-icon-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/manifest-icon-192.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },

    iconPaths: {
      // favicon16: 'img/icons/favicon-16x16.png',
      // favicon32: 'img/icons/favicon-32x32.png',
      maskIcon: 'img/icons/manifest-icon-512.jpg',
      // msTileImage: 'img/icons/icon-144x144.png',
      // appleTouchIcon: 'img/icons/icon-152x152.png',
    },

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
};
