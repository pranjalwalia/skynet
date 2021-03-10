import express from 'express';
import { File } from '../models/File';

export const downloadFile = async (
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
): Promise<void> => {
    try {
        const file: any = await File.findOne({ uuid: req.params.uuid });

        if (!file) {
            res.render('download', { error: 'Link is expired !' });
            return;
        }

        const filePath: string = `${__dirname}/../../${file.path}`;
        res.download(filePath); //! download the file
    } catch (err) {
        res.status(500).json({ error: 'Application error !' });
    }
};
