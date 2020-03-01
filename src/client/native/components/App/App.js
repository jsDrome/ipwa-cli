import React from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { AdMobBanner } from 'expo-ads-admob';

import styles from './styles';

const { showBannerAd, ad, webview: { uri, userAgent } } = require('./config');

// eslint-disable-next-line no-undef
const env = __DEV__ ? "test" : "production"
const { bannerAdUnitId } = ad[env];

const App = () => <View style={styles.app}>
  <StatusBar barStyle="light-content" />
  <WebView
    userAgent={userAgent}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    startInLoadingState={true}
    scrollEnabled={true}
    renderLoading={Loader}
    bounce={false}
    useWebKit={true}
    source={{ uri }}
    style={styles.webView} />
  {showBannerAd && <BannerAd />}
</View>;

const BannerAd = () => AdMobBanner && <AdMobBanner
  style={styles.bannerAd}
  bannerSize="fullBanner"
  adUnitID={bannerAdUnitId}
  testDeviceID="EMULATOR"
  servePersonalizedAds
  onDidFailToReceiveAdWithError={() => console.log('error from ad')} />;

const Loader = () => <ActivityIndicator style={styles.loader} hidesWhenStopped={false} />;

export default App;
