import compression from 'compression';
import cors from 'cors';
import { Request, Response, NextFunction, json } from 'express';

const noIECaching = (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '-1');
    next();
};

export const middleware = [compression(), cors(), json(), noIECaching];
