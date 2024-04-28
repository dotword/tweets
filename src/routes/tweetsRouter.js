import express from 'express';

import {
    getTweetsController,
    newTweetController,
    getTweetController,
    deleteTweetController
} from '../controllers/index.js';

import authUser from '../middlewares/auth.js';

const router = express.Router();

router.post('/', authUser, newTweetController);
router.get('/', getTweetsController);
router.get('/tweet/:id', getTweetController);
router.delete('/tweet/:id', authUser, deleteTweetController);


export default router;