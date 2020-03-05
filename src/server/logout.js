import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.clearCookie("__session");
  return res.redirect('/');
});

export default router;
