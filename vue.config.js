module.exports = {
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? '/flat-scan-vue-pwa/' : '/',
  pwa: {
    name: 'flatScan',
    themeColor: '#FFF9E8',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    manifestPath: 'manifest.json',
    manifestOptions: {
      gcm_sender_id: '103953800507',
      start_url: './',
      display: 'standalone',
      icons: [
        {
          src: './img/icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: './img/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: './img/icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'maskable any',
        },
        // {
        //   src: './img/icons/icon-144x144.png',
        //   sizes: '144x144',
        //   type: 'image/png',
        //   purpose: 'maskable any',
        // },
        {
          src: './img/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: './img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: './img/icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: './img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable any',
        },
      ],
    },

    // iconPaths: {
    // favicon16: 'img/icons/favicon-16x16.png',
    // favicon32: 'img/icons/favicon-32x32.png',
    // maskIcon: './img/icons/manifest-icon-512.jpg',
    // msTileImage: 'img/icons/icon-144x144.png',
    // appleTouchIcon: 'img/icons/icon-152x152.png',
    // },

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
};
