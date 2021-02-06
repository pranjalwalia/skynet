import express from 'express';
import { postFile } from '../controllers/FileOps';

const router = express.Router();

router.post('/', postFile);

export default router;
