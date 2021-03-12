import express from 'express';

const router = express.Router();

const healthCheck = (
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
): void => {
    res.json({ alive: 'true' });
};

router.get('/', healthCheck);

export { router as healthCheck };
