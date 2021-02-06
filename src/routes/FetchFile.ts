import express from 'express';
import { fetchFile } from '../controllers/FetchFile';

const router = express.Router();

router.get('/:uuid', fetchFile);

export default router;
