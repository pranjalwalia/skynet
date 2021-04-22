/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import { corsOptions } from './config';
import { FileRouter, FetchRouter, DownloadRouter, healthCheck } from './routes';

require('dotenv').config();
export const app: express.Application = express();

//* set view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//* middleware
app.use(express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(morgan('dev'));

//* routers
/**
 * @description just PaaS things :)
 * **/
app.use('/', healthCheck);

/**
 * @description dispatch/upload operations
 * **/
app.use('/api/files', FileRouter);

/**
 * @description dispatch/upload operations
 * **/
app.use('/files', FetchRouter);

/**
 * @description dispatch/upload operations
 * **/
app.use('/files/download', DownloadRouter);
