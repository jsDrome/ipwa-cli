import React from 'react';
import { Helmet } from "react-helmet";

const time = new Date().getTime();

const MetaTags = () => <Helmet>
  <title>Title</title>
  <meta charset="UTF-8" />
  <meta name="theme-color" content="<!--themeColor here-->" />
  <meta name="author" content="<!--author here-->" />
  <meta name="keywords" content="<!--keywords here-->" />
  <meta property="og:image:alt" content="<!--ogImageAlt here-->" />
  <meta name="description" content="<!--description here-->" />
  <meta property="og:description" content="<!--ogDescription here-->" />
  <meta property="og:title" content="<!--ogTitle here-->" />
  <meta property="og:url" content="<!--ogUrl here-->" />
  <meta property="og:image" content="<!--ogImage here-->" />
  <meta property="og:type" content="<!--ogType here-->" />
  <meta property="fb:app_id" content="<!--fbAppId here-->" />
  <meta name="viewport" content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no" />
  <meta name="robots" content="index,follow" />
  <script>{`window.dataLayer = [{ event: "gtm.js", "gtm.start": ${time} }]`}</script>
  <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-N4PT7MP"></script>
  <style type="text/css">{``}</style>
  <link rel="icon" href="/img/favicon.ico" />
  <link rel="apple-touch-icon" href="/img/logo-192.png" />
  <link rel="manifest" href="/manifest.json" />
</Helmet>;

export default MetaTags;
