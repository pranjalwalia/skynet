import nodemailer from 'nodemailer';
import { IEmail } from '../interfaces/IEmail';

//todo: integrate this with the sendgrid API

export const sendMail = ({ from, to, subject, text, html }: IEmail) => {
    const transporter = nodemailer.createTransport({
        host: '',
    });
};
