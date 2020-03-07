import express from 'express';

import { getRedirectUrlForSuccess } from '../server.utils';

const router = express.Router();

router.get('/', (req, res) => {
  res.clearCookie("__session");
  return res.redirect('/' + getRedirectUrlForSuccess('logout', 'success'));
});

export default router;
