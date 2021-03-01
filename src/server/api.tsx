import { Router, Request, Response } from 'express';

const router = Router();

router.use('/', (_req: Request, res: Response) => {
    res.send('Hello from the API');
});

export const api = router;
