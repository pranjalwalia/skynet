import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

require('dotenv').config();

const app: express.Application = express();
app.use(cors());
app.use(morgan('dev'));

const port = process.env.PORT || 3000;
app.listen(port, (): void => console.log(`App listening on port:${port}`));
