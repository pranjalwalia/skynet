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
                //* multer init errors
                res.status(500).json({ error: err.message });
                return;
            }
            if (!req.file) {
                //* validation: empty file form entity
                res.status(500).json({ error: 'All values are required' });
                return;
            }

            /**
             * `req.file` comes with multer
             *  **/
            const file = new File({
                fileName: req.file.filename,
                uuid: uuid4(),
                path: req.file.path,
                size: req.file.size,
            });

            try {
                const response: any = await file.save();
                res.status(201).json({
                    file: `${process.env.APP_BASE_URL}/files/${response.uuid}`,
                    //* http://localhost/files/2343402-12323.ext
                });
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    );
};

/**
 * FileUpload Endpoint
 * - the client should request here
 * - multipart form data accepted at field `myfile`
 * **/
