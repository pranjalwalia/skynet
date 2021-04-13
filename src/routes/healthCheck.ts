import express from 'express';

const router = express.Router();

const healthCheck = (
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
): void => {
    res.status(200).json({ alive: 'true' });
};

router.get('/', healthCheck);

export { router as healthCheck };
