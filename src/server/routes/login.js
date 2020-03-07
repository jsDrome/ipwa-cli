/* eslint-disable camelcase */
import express from 'express';
import linkedin from './linkedin';
import github from './github';

const router = express.Router();

router.use('/linkedin', linkedin);
router.use('/github', github);

export default router;
