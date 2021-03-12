/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import { dbConnection } from './db/connection';
import { FileRouter } from './routes/fileOps';
import { FetchRouter } from './routes/FetchFile';
import { DownloadRouter } from './routes/Downloads';

require('dotenv').config();
export const app: express.Application = express();

//* set view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//* middleware
app.use(express.static('src/public'));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//* routers
app.use('/api/files', FileRouter);
app.use('/files', FetchRouter);
app.use('/files/download', DownloadRouter);

//* server
dbConnection();
const port = process.env.PORT || 3000;
app.listen(port, (): void => console.log(`App listening on port:${port}`));
