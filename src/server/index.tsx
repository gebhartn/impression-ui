import express from 'express';

import { api } from './api';
import { app } from './app';
import { middleware } from './middleware';

export const server = express();

server.disable('x-powered-by');

middleware.forEach(middleware => server.use(middleware));

server.use('/public', express.static(process.env.RAZZLE_PUBLIC_DIR!));
server.use('/api', api);
server.use('*', app);
