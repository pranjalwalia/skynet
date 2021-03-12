import express from 'express';
import { postFile } from '../controllers/fileOps';
import { mailResponse } from '../controllers/SendEmail';

const router = express.Router();

router.post('/', postFile);
router.post('/send', mailResponse);

export { router as FileRouter };
