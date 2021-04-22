/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { Request, Response, NextFunction } from 'express';
import { File } from '../models/File';
import { multiPartFormHandler } from '../config/multerConfig';
const { v4: uuid4 } = require('uuid');

export const postFile = (req: Request, res: Response, _next: NextFunction) => {
    multiPartFormHandler(
        req,
        res,
        async (err): Promise<void> => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (!req.file) {
                res.status(500).json({ error: 'All values are required' });
                return;
            }

            const file = new File({
                fileName: req.file.filename,
                uuid: uuid4(),
                path: req.file.path,
                size: req.file.size,
            });

            try {
                const response: any = await file.save();
                res.status(200).json({
                    file: `${process.env.APP_BASE_URL}/files/${response.uuid}`,
                });
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    );
};
