/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import express from 'express';
import { storage, upload } from '../config/multerConfig';

export const postFile = (
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
): void => {
    if (!req.file) {
        //! validate request
        res.status(403).json({ error: 'All values are required' });
    }
    //! store file
    upload();

    //! store file into db
    //! response -> link
};
