import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import session from 'express-session';
const KnexSessionStore = require('connect-session-knex')(session);

import authRouter from './api/auth/router';
import userRouter from './api/user/router';
import db from './database/dbConfig';

const server = express();

const sessionConfig = {
  name: 'santo',
  secret: 'super safe session secret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: (1000 * 60) * 5, // cookie will expires after 5 minutes
    secure: false, // must be set to true in production
    httpOnly: true,
  },
  store: new KnexSessionStore({
    knex: db,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: (1000 * 60) * 60,
  }),
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/*', (req, res) => {
  res.status(401).json({ error: 'the requested endpoint could not be found.' });
})

export default server;
