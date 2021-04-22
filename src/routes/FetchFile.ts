import express from 'express';
import { fetchFile } from '../controllers/FetchFile';

const router = express.Router();

/**
 * @route   GET /files/:uuid
 * @desc    Fetch file from server
 * @access  public
 * **/
router.get('/:uuid', fetchFile);

export { router as FetchRouter };
