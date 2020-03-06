/* eslint-disable no-magic-numbers */
/* eslint-disable camelcase */
import express from 'express';
import axios from 'axios';
import querystring from 'querystring';
import cookieParser from 'cookie-parser';

import {
  getLinkedinLoginUrl,
  getLinkedInRedirectUrl,
  currentTimeStamp,
  doSomethingWithEmail,
  getRedirectUrlForSuccess,
  getRedirectUrlForError,
} from './server.utils';

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
    // eslint-disable-next-line no-undef
    .post(BUILD_LINKEDIN_ACCESS_TOKEN_URL, querystring.stringify({
      "grant_type": "authorization_code",
      "code": code,
      "redirect_uri": getLinkedInRedirectUrl(originalUrl),
      // eslint-disable-next-line no-undef
      "client_id": BUILD_LINKEDIN_CLIENT_ID,
      // eslint-disable-next-line no-undef
      "client_secret": BUILD_LINKEDIN_CLIENT_SECRET,
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
    .catch(err => {
      console.error(err);
      return res.redirect(getRedirectUrlForError('linkedin', 'access_token'));
    });
});

router.get('/userData', (req, res) => {
  const { originalUrl = '/' } = req.query;
  const { linkedin_access_token } = JSON.parse(req.cookies.__session);

  if (!linkedin_access_token) throw new Error();

  // eslint-disable-next-line no-undef
  return axios.get(BUILD_LINKEDIN_API_URL, {
    headers: {
      Authorization: `Bearer ${linkedin_access_token}`,
    },
  }).then(data => {
    const email = data.data.elements[0]['handle~'].emailAddress;
    doSomethingWithEmail(email);
    res.redirect(originalUrl + getRedirectUrlForSuccess('linkedin', 'login_success'));
  })
    .catch(err => {
      console.log(err);
      return res.redirect(getRedirectUrlForError('linkedin', 'data'));
    });
});

export default router;
