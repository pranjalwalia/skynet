import express from 'express';
import { downloadFile } from '../controllers/DownloadFile';
import { mailResponse } from '../controllers/SendEmail';

const router = express.Router();

/**
 * @route   GET /files/download/:uuid
 * @desc    render download template
 * @access  public
 *
 * **/
router.get('/:uuid', downloadFile);

/**
 * @route   POST /files/download/send
 * @desc    Dispatch via mail service
 * @access  public
 * @description invoke email service here
 * **/
router.post('/send', mailResponse);

export { router as DownloadRouter };
