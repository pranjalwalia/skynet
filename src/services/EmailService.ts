import nodemailer from 'nodemailer';

export interface IEmail {}

export const sendMail = ({ from, to, subject, text, html }: IEmail) => {};
