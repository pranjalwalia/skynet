import express from 'express';
import { postFile } from '../controllers/fileOps';
import { mailResponse } from '../controllers/SendEmail';

const router = express.Router();

/**
 * @route   POST /api/files/
 * @desc    Upload to server
 * @access  public
 * @description upload files into server
 * **/
router.post('/', postFile);

/**
 * @route   POST /api/files/send
 * @desc    Dispatch via mail service
 * @access  public
 * @description invoke email service alternative
 * **/
router.post('/send', mailResponse);

export { router as FileRouter };
