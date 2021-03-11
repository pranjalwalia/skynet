import express from 'express';
import { downloadFile } from '../controllers/DownloadFile';
import { mailResponse } from '../controllers/SendEmail';

const router = express.Router();

router.get('/:uuid', downloadFile);

//* invoke email service here
router.post('/send', mailResponse);

export { router as DownloadRouter };
