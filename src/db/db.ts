import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const dbConnection = (): void => {
    mongoose.connect(process.env.MONGO_URI, {
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
