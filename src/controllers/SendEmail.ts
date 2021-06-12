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

    //* validation
    if (!uuid || !destination || !source) {
        //* 422 unprocessible entity
        res.status(422).json({ error: 'All fields are required' });
        return;
    }

    try {
        //* fetch target file
        const file: any = await File.findOne({ uuid: uuid });

        /**
         * set the sender, reciever on file and save it back
         * if either is already set => mailed earlier
         * spamming the send button wont work :)
         * **/
        if (file.sender) {
            res.status(422).json({ error: 'Email already sent' });
            return;
        }

        file.sender = source;
        file.reciever = destination;

        //* writeback updated file
        try {
            await file.save();
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }

        //* Invoke mail service
        //* embedd payload into html
        const payload: IEmail = {
            from: source,
            to: destination,
            subject: 'skynet file drop',
            text: `${source} shared a file with you..`,
            html: mailTemplate({
                emailFrom: source,
                downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}`,
                size: parseInt((file.size / 1000).toString()) + 'Kb',
                expires: '24 Hours',
            }),
        };

        //* sends and logs mail service response
        //* critical step
        sendMail(payload);
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
