/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { dbConnection } from './db/connection';
import FileRouter from './routes/FileOps';
import FetchRouter from './routes/FetchFile';

require('dotenv').config();
const app: express.Application = express();

//* middleware
app.use(cors());
app.use(morgan('dev'));

//* routers
app.use('/api/files', FileRouter);
app.use('/files', FetchRouter);

//* server
dbConnection();
const port = process.env.PORT || 3000;
app.listen(port, (): void => console.log(`App listening on port:${port}`));
