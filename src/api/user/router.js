import express from 'express';

import userController from './controller';
import helpers from './helpers';

const {
  findAllUsers,
} = userController;
const {
  authorizeUser,
} = helpers;

const router = express.Router();

router.get('/', authorizeUser, findAllUsers);

export default router;
