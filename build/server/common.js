const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const rc = require('rc');

const config = rc('config');

const {
  build: {
    server: {
      port,
    },
  },
  login: {
    github: {
      clientId: githubClientId,
      clientSecret: githubClientSecret,
      accessTokenUrl: githubAccessTokenUrl,
      authUrl: githubLoginUrl,
      apiUrl: githubApiUrl,

    },
    linkedin: {
      clientId: linkedinClientId,
      clientSecret: linkedinClientSecret,
      accessTokenUrl: linkedinAccessTokenUrl,
      authUrl: linkedinLoginUrl,
      apiUrl: linkedinApiUrl,
    },
  },
  firebase: {
    apiKey: firebaseApiKey,
  },
} = config;

const moduleRules = require('../moduleRules');

module.exports = {
  entry: {
    index: './src/server/server.js',
  },
  output: {
    path: path.resolve(__dirname, `../../_dist`),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: moduleRules,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/app.css",
      chunkFilename: "css/[id].css",
    }),
    new CopyPlugin([
      { from: 'build/templates/404.html' },
      { from: '.configrc' },
      { from: 'assets', to: 'img' },
    ]),
    new webpack.DefinePlugin({
      BUILD_SERVER_PORT: JSON.stringify(port),
      BUILD_GITHUB_CLIENT_ID: JSON.stringify(githubClientId),
      BUILD_GITHUB_CLIENT_SECRET: JSON.stringify(githubClientSecret),
      BUILD_GITHUB_ACCESS_TOKEN_URL: JSON.stringify(githubAccessTokenUrl),
      BUILD_GITHUB_AUTH_URL: JSON.stringify(githubLoginUrl),
      BUILD_GITHUB_API_URL: JSON.stringify(githubApiUrl),
      BUILD_LINKEDIN_CLIENT_ID: JSON.stringify(linkedinClientId),
      BUILD_LINKEDIN_CLIENT_SECRET: JSON.stringify(linkedinClientSecret),
      BUILD_LINKEDIN_ACCESS_TOKEN_URL: JSON.stringify(linkedinAccessTokenUrl),
      BUILD_LINKEDIN_AUTH_URL: JSON.stringify(linkedinLoginUrl),
      BUILD_LINKEDIN_API_URL: JSON.stringify(linkedinApiUrl),
      BUILD_FIREBASE_API_KEY: JSON.stringify(firebaseApiKey),
    }),
  ],
  target: 'node',
  externals: nodeExternals(),
};
