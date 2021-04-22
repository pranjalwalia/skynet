import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

const healthCheck = (
    _req: Request,
    res: Response,
    _next: NextFunction
): void => {
    res.status(200).json({ alive: 'true' });
};

/**
 * @route   GET /
 * @desc    Check status of VM
 * @access  public
 * **/
router.get('/', healthCheck);

export { router as healthCheck };
