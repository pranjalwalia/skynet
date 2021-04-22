import { Request, Response, NextFunction } from 'express';
import { File } from '../models/File';

export const downloadFile = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const file: any = await File.findOne({ uuid: req.params.uuid });

        /**
         * CRON jobs
         * **/
        if (!file) {
            res.render('download', { error: 'Link is expired !' });
            return;
        }
        //* filePath = /uploads/12323-23312.ext
        const filePath: string = `${__dirname}/../../${file.path}`;
        res.download(filePath); //! download the file
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
