import { Request, Response, NextFunction } from 'express';
import { File } from '../models/File';
import { sendMail } from '../services/EmailService';
import { IEmail } from '../interfaces/IEmail';
import mailTemplate from '../constants/EmailTemplate';

require('dotenv').config();

export const mailResponse = async (
    req: Request,
    res: Response,
    _next: NextFunction
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
        // if sender exists => already sent a mail before
        res.status(422).json({ error: 'Email already sent' });
        return;
    }

    file.sender = source;
    file.reciever = destination;

    //! save updated config of file to db
    try {
        await file.save();
    } catch (err) {
        res.status(500).json({ error: 'Application Error' });
    }

    //* send email to the destination using the sevice
    const payload: IEmail = {
        from: source,
        to: destination,
        subject: 'skynet file drop',
        text: `${source} shared a file with you..`,
        html: mailTemplate({
            emailFrom: source,
            downloadLink: `${process.env.APP_BASE_URL}/file/${file.uuid}`,
            size: parseInt((file.size / 1000).toString()) + 'Kb',
            expires: '24 Hours',
        }),
    };
    sendMail(payload);
    //* respond back after sending
    res.status(200).json({ success: true });
};
