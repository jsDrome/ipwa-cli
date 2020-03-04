const domain = "https://ipwa-app.web.app";

module.exports = {
  showBannerAd: false,
  showInterstitialAd: false,
  ad: {
    test: {
      bannerAdUnitId: 'ca-app-pub-3940256099942544/6300978111',
      interstitialAdUnitID: 'ca-app-pub-3940256099942544/4411468910',
    },
    production: {
      bannerAdUnitId: 'ca-app-pub-3940256099942544/6300978111',
      interstitialAdUnitID: 'ca-app-pub-3940256099942544/4411468910',
    },
  },
  webview: {
    userAgent: "Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36",
    uri: `${domain}?app=true`,
  },
  splashUri: `${domain}/img/splash.png`,
};
