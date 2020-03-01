import express from 'express';

import userController from './controller';

const {
  findAllUsers,
} = userController;

const router = express.Router();

router.get('/', findAllUsers);

export default router;
