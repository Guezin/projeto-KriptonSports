import 'reflect-metadata';
import express, { json } from 'express';
import cors from 'cors';
import 'express-async-errors';

import '../typeorm/connectionDB';
import '@shared/container';

import routes from './routes';

import middlewareError from '@shared/infra/http/middlewares/error';
import rateLimiter from '@shared/infra/http/middlewares/rateLimiter';

const server = express();

server.use(rateLimiter);
server.use(cors());
server.use(json());
server.use(routes);
server.use(middlewareError);

server.listen(3333, () => console.log('🚀 Server started on port 3333'));
