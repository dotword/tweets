import express from 'express';
import usersRouter from './usersRouter.js';
import tweetsRouter from './tweetsRouter.js';

const router = express.Router();

router.use(usersRouter);
router.use(tweetsRouter);

export default router;