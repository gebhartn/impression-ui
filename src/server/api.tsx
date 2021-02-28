import { Router, Request, Response } from 'express';

export const api = Router();

api.use('/', (_req: Request, res: Response) => {
    res.send('Hello from the API');
});
