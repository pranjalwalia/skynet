import express from 'express';
import { postFile } from '../controllers/fileOps';

const router = express.Router();

router.post('/', postFile);

export default router;
