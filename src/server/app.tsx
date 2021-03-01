import * as React from 'react';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { App } from '../client/pages';

let assets: any;

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const makeApp = (req: Request) => {
    const context = {};
    const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
            <App />
        </StaticRouter>,
    );
    try {
        const html = `
<!doctype html>
    <html lang="en">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset='utf-8' />
        <meta name='theme-color' content='#ffffff'>
        <link rel='icon' type='image/png' href='/public/images/favicon-32x32.png' sizes='32x32'>
        <link rel='icon' type='image/png' href='/public/images/favicon-16x16.png' sizes='16x16'>
        <title>Impression</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
            assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''
        }
          ${
              process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
    </head>
    <body>
        <div id="impression-ui">${markup}</div>
    </body>
</html>
`;
        return html;
    } catch (e) {
        console.error(e);
    }

    return false;
};

export const app = (req: Request, res: Response) => {
    const shell = makeApp(req);
    res.send(shell);
};
