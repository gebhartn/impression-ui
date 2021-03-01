import express, { Response, Request } from 'express';

import { server } from './server';

declare const module: NodeModule;

if (module.hot) {
    module.hot.accept('./server', () => {
        console.log('HMR Reloading...');
    });
    console.info('Server-side HMR Enabled!');
}

const app = express();
app.use((req: Request, res: Response) => (server as any).handle(req, res));

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
app.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`App started http://localhost:${port}`);
});
