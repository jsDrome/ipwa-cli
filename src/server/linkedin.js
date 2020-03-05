/* eslint-disable camelcase */
import express from 'express';
import axios from 'axios';
import querystring from 'querystring';
import rc from 'rc';
import cookieParser from 'cookie-parser';

import { getLinkedinLoginUrl, getLinkedInRedirectUrl, currentTimeStamp, setEmailInDb } from './server.utils';

const config = rc('config');

const { login: { linkedin: { clientId: linkedinClientId, accessTokenUrl: linkedinAccessTokenUrl, apiUrl: linkedinApiUrl, clientSecret: linkedinClientSecret } } } = config;

const router = express.Router();

router.use(cookieParser());

router.get('/', (req, res) => {
  const { originalUrl = '/' } = req.query;
  const url = getLinkedinLoginUrl(originalUrl);
  res.redirect(url);
});

router.get('/process', (req, res) => {
  const { code, originalUrl } = req.query;
  return axios
    .post(linkedinAccessTokenUrl, querystring.stringify({
      "grant_type": "authorization_code",
      "code": code,
      "redirect_uri": getLinkedInRedirectUrl(originalUrl),
      "client_id": linkedinClientId,
      "client_secret": linkedinClientSecret,
    }))
    .then(data => {
      const { access_token, expires_in } = data.data;

      res.cookie('__session', JSON.stringify({
        linkedin_access_token: access_token,
        linkedin_access_time: currentTimeStamp,
        linkedin_expiry: expires_in,
      }));

      return res.redirect(`/login/linkedin/userData?originalUrl=${originalUrl}`);
    })
    // eslint-disable-next-line handle-callback-err
    .catch(() => {
      return res.redirect('/?login=false');
    });
});

router.get('/userData', (req, res) => {
  const { originalUrl = '/' } = req.query;
  const { linkedin_access_token } = JSON.parse(req.cookies.__session);

  if (!linkedin_access_token) throw new Error();

  return axios.get(linkedinApiUrl, {
    headers: {
      Authorization: `Bearer ${linkedin_access_token}`,
    },
  }).then(data => {
    // eslint-disable-next-line no-magic-numbers
    const email = data.data.elements[0]['handle~'].emailAddress;
    setEmailInDb(email);
    res.redirect(originalUrl);
  })
    .catch(err => {
      console.log(err);
      return res.redirect('/?login=false');
    });
});

export default router;
