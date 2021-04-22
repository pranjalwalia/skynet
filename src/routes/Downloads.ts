import express from 'express';
import { downloadFile } from '../controllers/DownloadFile';

const router = express.Router();

/**
 * @route   GET /files/download/:uuid
 * @desc    render download template
 * @access  public
 * @description invoked after clicking the download button
 * **/
router.get('/:uuid', downloadFile);

export { router as DownloadRouter };
