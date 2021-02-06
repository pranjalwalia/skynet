import express from 'express';
import { File } from '../models/File';

export const fetchFile = async (
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
): Promise<void> => {
    try {
        const file: any = await File.findOne({ uuid: req.params.uuid });

        if (!file) {
            // link expired
            res.render('download', {
                error: 'Link has expired for the file',
            });
            return;
        }
        res.render('download', {
            uuid: file.uuid,
            fileName: file.fileName,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
        });
    } catch (err) {
        res.render('download', { error: 'something went wrong!' });
    }
};
