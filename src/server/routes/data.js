import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  return res.redirect('/');
});

export default router;