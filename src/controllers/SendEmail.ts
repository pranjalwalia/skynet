import express from 'express';
import { File } from '../models/File';

export const sendEmail = async (
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
): Promise<void> => {
    const { uuid, destination, source } = req.body;

    //! validate request
    if (!uuid || !destination || !source) {
        //* HTTP: 422 => validation error
        res.status(422).json({ error: 'All fields are required' });
        return;
    }

    //! query the db and fetch the file data
    const file: any = await File.findOne({ uuid: uuid });
    if (file.sender) {
        // if sender exists, means we have already sent a mail before
        //  avoid this by returning here
        res.status(422).json({ error: 'Email already sent' });
        return;
    }

    file.sender = source;
    file.reciever = destination;

    //! save this updated config of the file to the db
    try {
        const response = await file.save();
    } catch (err) {
        res.status(500).json({ error: 'Application Error' });
    }

    //* send email to the destination using the sevice
};
