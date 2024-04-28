import express from 'express';

import {
    newUserController,
    loginUserController,
    getUserController
} from '../controllers/index.js';

const router = express.Router();

router.post('/user', newUserController);
router.get('/user/:id', getUserController);
router.post('/login', loginUserController);


export default router;