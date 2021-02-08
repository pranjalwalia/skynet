import express from 'express';
import { downloadFile } from '../controllers/DownloadFile';
import { sendEmail } from '../controllers/SendEmail';

const router = express.Router();

router.get('/:uuid', downloadFile);

//* invoke email service here
router.post('/send', sendEmail);

export default router;
