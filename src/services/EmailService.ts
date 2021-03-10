/* eslint-disable @typescript-eslint/no-unused-vars */
import nodemailer from 'nodemailer';
import { IEmail } from '../interfaces/IEmail';
require('dotenv').config();

//todo: integrate this with the sendgrid API

export const sendMail = async ({
    from,
    to,
    subject,
    text,
    html,
}: IEmail): Promise<void> => {
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const info: Promise<void> = await transport.sendMail({
        from: `Skynet <${from}>`,
        to: to,
        subject: subject,
        text: text,
        html: html,
    });
    if (info) {
        console.log(info);
    }
};
