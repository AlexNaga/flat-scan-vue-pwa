module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/flat-scan-vue-pwa/' : '/',
  pwa: {
    name: 'flatScan',
    themeColor: '#00aae7',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestPath: 'public/manifest.json',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
};
