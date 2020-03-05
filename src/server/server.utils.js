import rc from 'rc';
import firebase from 'firebase-admin';
import md5 from 'md5';

const config = rc('config');
const { environment: { DEV_URL, PROD_URL }, login: { linkedin: { authUrl: linkedinLoginUrl, clientId: linkedinClientId } } } = config;

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
  let _linkedinLoginUrl = linkedinLoginUrl.replace('<redirectUrl>', getLinkedInRedirectUrl(originalUrl));
  _linkedinLoginUrl = _linkedinLoginUrl.replace('<clientId>', linkedinClientId);
  return _linkedinLoginUrl;
};

export const getLinkedInRedirectUrl = originalUrl => {
  const URL = process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL;
  return `${URL}/login/linkedin/process?originalUrl=${originalUrl}`;
};

export const currentTimeStamp = new Date().getTime();

export const setEmailInDb = email => {
  if(process.env.NODE_ENV === 'development') return;
  firebase.database().ref('users/' + md5(email)).set({
    email,
  });
};

export const isUserLoggedIn = cookies => !!cookies.__session;
