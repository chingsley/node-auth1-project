import express from 'express';
const helmet = require('helmet');
const cors = require('cors');

import authRouter from './api/auth/router';
import userRouter from './api/user/router';


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/*', (req, res) => {
  res.status(401).json({ error: 'the requested endpoint could not be found.' });
})

export default server;
