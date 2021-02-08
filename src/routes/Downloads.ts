import express from 'express';
import { downloadFile } from '../controllers/DownloadFile';
import { File } from '../models/File';

const router = express.Router();

router.get('/:uuid', downloadFile);

router.post(
    '/send',
    async (
        req: express.Request,
        res: express.Response,
        _next: express.NextFunction
    ): Promise<void> => {
        const { uuid, destination, source } = req.body;

        //! validate request
        if (!uuid || !destination || !source) {
            //* HTTP: 422 => validation error
            res.status(422).json({ error: 'All fields are required' });
        }

        //! query the db and fetch the file data
        const file: any = await File.findOne({ uuid: uuid });
    }
);

export default router;
