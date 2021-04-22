/* eslint-disable no-else-return */
/* eslint-disable operator-linebreak */
import mongoose from 'mongoose';

require('dotenv').config();

export const dbConnection = (): void => {
    console.log('connecting...');
    mongoose
        .connect(process.env.MONGO_URI_DEV, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
        })
        .catch((err) => console.log(err));

    const db = mongoose.connection;

    //* mongoose connection events
    db.on('open', (): void => console.log('Mongo connection Success!!'))
        .on('close', (): void => console.log('Disconnected from Mongo..'))
        .on('error', (err): void => console.log(err));
};
