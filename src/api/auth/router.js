import express from 'express';
import authController from './controller';
import helpers from './helpers';

const {
  verifyUser,
} = helpers;


const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = authController;


router.post('/register', registerUser);
router.post('/login', verifyUser, loginUser);
router.delete('/', logoutUser);

export default router;
