/* eslint-disable no-magic-numbers */
/* eslint-disable camelcase */
import express from 'express';
import axios from 'axios';
import querystring from 'querystring';
import cookieParser from 'cookie-parser';

import {
  getGithubLoginUrl,
  getGithubRedirectUrl,
  currentTimeStamp,
  doSomethingWithEmail,
  getRedirectUrlForSuccess,
  getRedirectUrlForError,
} from './server.utils';

const router = express.Router();

router.use(cookieParser());

router.get('/', (req, res) => {
  const { originalUrl = '/' } = req.query;
  const url = getGithubLoginUrl(originalUrl);
  res.redirect(url);
});

router.get('/process', (req, res) => {
  const { code, originalUrl = '/' } = req.query;
  return axios
    // eslint-disable-next-line no-undef
    .post(BUILD_GITHUB_ACCESS_TOKEN_URL, querystring.stringify({
      "code": code,
      "redirect_uri": getGithubRedirectUrl(originalUrl),
      // eslint-disable-next-line no-undef
      "client_id": BUILD_GITHUB_CLIENT_ID,
      // eslint-disable-next-line no-undef
      "client_secret": BUILD_GITHUB_CLIENT_SECRET,
      "state": currentTimeStamp,
    }))
    .then(data => {
      res.cookie('__session', JSON.stringify({
        github_access_token: data.data.split('&')[0].split('=')[1],
      }));

      return res.redirect(`/login/github/userData?originalUrl=${originalUrl}`);
    })
    // eslint-disable-next-line handle-callback-err
    .catch(err => {
      console.log(err);
      return res.redirect(originalUrl + getRedirectUrlForError('github', 'access_token'));
    });
});

router.get('/userData', (req, res) => {
  const { originalUrl = '/' } = req.query;
  const { github_access_token } = JSON.parse(req.cookies.__session);

  if (!github_access_token) throw new Error();

  // eslint-disable-next-line no-undef
  return axios.get(BUILD_GITHUB_API_URL, {
    headers: {
      Authorization: `token ${github_access_token}`,
    },
  })
    .then(data => {
      const email = data.data.email;
      doSomethingWithEmail(email);
      res.redirect(originalUrl + getRedirectUrlForSuccess('github', 'login_success'));
    })
    .catch(err => {
      console.log(err);
      return res.redirect(originalUrl + getRedirectUrlForError('github', 'data'));
    });
});

export default router;
