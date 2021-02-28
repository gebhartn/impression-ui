import express from 'express';

let { server } = require('./server');

if (module.hot) {
    module.hot.accept('./server', () => {
        console.log('R  HMR Reloading `./server`...');
        try {
            server = require('./server');
        } catch (error) {
            console.error(error);
        }
    });
    console.info('OK  Server-side HMR Enabled!');
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export default express()
    .use((req, res) => server.handle(req, res))
    .listen(port, () => {
        console.log(`> App started http://localhost:${port}`);
    });
