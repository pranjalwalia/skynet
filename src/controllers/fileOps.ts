/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import express from 'express';
import { upload } from '../config/multerConfig';
import { File } from '../models/File';

const { v4: uuid4 } = require('uuid');

export const postFile = (
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
): void => {
    upload(
        req,
        res,
        async (err): Promise<void> => {
            if (!req.file) {
                //! validate request
                res.status(500).json({ error: 'All values are required' });
                return;
            }

            if (err) {
                res.status(500).json({ error: err.message });
            }
            //! else store in db
            const file = new File({
                fileName: req.file.filename,
                uuid: uuid4(),
                path: req.file.path,
                size: req.file.size,
            });

            try {
                //! response -> link
                const response: any = await file.save();
                res.json({
                    file: `${process.env.APP_BASE_URL}/files/${response.uuid}`,
                });
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    );
};
