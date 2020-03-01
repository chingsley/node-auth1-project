import express from 'express';
import authController from './controller';
import helpers from './helpers';

const {
  verifyUser,
} = helpers;


const router = express.Router();
const {
  registerUser,
  loginUser
} = authController;


router.post('/register', registerUser);
router.post('/login', verifyUser, loginUser);

export default router;
