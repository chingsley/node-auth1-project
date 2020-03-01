import express from 'express';
import authController from './controller';


const router = express.Router();
const {
  registerUser
} = authController;


router.post('/register', registerUser);

export default router;
