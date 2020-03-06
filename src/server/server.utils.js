import rc from 'rc';

import { setEmailInFirebaseDB } from './firebase.utils';

const config = rc('config');
const {
  environment: {
    DEV_URL,
    PROD_URL,
  },
  alerts,
} = config;

export const template = (helmet, html, css, cookies) => `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.style.toString()}
    ${helmet.script.toString()}
    <style id="jss-server-side">${css}</style>
  </head>
  <script>window.isUserLoggedIn=${isUserLoggedIn(cookies)};</script>
  <body>
    <div id="root">${html}</div>
    <script type="text/javascript" src="app.bundle.js"></script>
    <script type="text/javascript" src="npm.bundle.js"></script>
  </body>
</html>`;

export const getLinkedinLoginUrl = originalUrl => {
  // eslint-disable-next-line no-undef
  let _linkedinLoginUrl = BUILD_LINKEDIN_AUTH_URL.replace('<redirectUrl>', getLinkedInRedirectUrl(originalUrl));
  // eslint-disable-next-line no-undef
  _linkedinLoginUrl = _linkedinLoginUrl.replace('<clientId>', BUILD_LINKEDIN_CLIENT_ID);
  return _linkedinLoginUrl;
};

export const getLinkedInRedirectUrl = originalUrl => {
  // eslint-disable-next-line no-undef
  const URL = BUILD_NODE_ENV === 'production' ? PROD_URL : DEV_URL;
  return `${URL}/login/linkedin/process?originalUrl=${originalUrl}`;
};

export const currentTimeStamp = new Date().getTime();

export const doSomethingWithEmail = email => {
  // eslint-disable-next-line no-undef
  if (BUILD_NODE_ENV === 'development') return;
  setEmailInFirebaseDB(email);
};

export const getGithubLoginUrl = originalUrl => {
  // eslint-disable-next-line no-undef
  let _githubLoginUrl = BUILD_GITHUB_AUTH_URL.replace('<redirectUrl>', getGithubRedirectUrl(originalUrl));
  // eslint-disable-next-line no-undef
  _githubLoginUrl = _githubLoginUrl.replace('<clientId>', BUILD_GITHUB_CLIENT_ID);
  _githubLoginUrl = _githubLoginUrl.replace('<state>', currentTimeStamp);
  return _githubLoginUrl;
};

export const getGithubRedirectUrl = originalUrl => {
  // eslint-disable-next-line no-undef
  const URL = BUILD_NODE_ENV === 'production' ? PROD_URL : DEV_URL;
  return `${URL}/login/github/process?originalUrl=${originalUrl}`;
};

export const isUserLoggedIn = cookies => !!cookies.__session;

export const getFinalRedirectUrl = (key, provider, type) => {
  return `?message=${alerts[key][provider][type].message}&type=${key}&duration=${alerts[key][provider][type].duration}`;
};

export const getRedirectUrlForError = (provider, type) => getFinalRedirectUrl('error', provider, type);

export const getRedirectUrlForSuccess = (provider, type) => getFinalRedirectUrl('success', provider, type);
