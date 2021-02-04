/* eslint-disable operator-linebreak */
import mongoose from 'mongoose';

require('dotenv').config();

const DB_URI =
    process.env.NODE_ENV === 'production'
        ? process.env.MONGO_URI_PROD
        : process.env.MONGO_URI_DEV;

export const dbConnection = (): void => {
    mongoose.connect(DB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
    });
    const db = mongoose.connection;
    db.on('open', (): void => console.log('Mongo connection Success!!'))
        .on('close', (): void => console.log('Disconnected from Mongo..'))
        .on('error', (err): void => console.log(err));
};
