import { Request, Response } from 'express';

let assets: any;

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const makeApp = () => {
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
        ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
          ${
              process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
    </head>
    <body>
        <div id="impression-ui"></div>
    </body>
</html>
`;
        return html;
    } catch (e) {
        console.error(e);
    }

    return false;
};

export const app = (_req: Request, res: Response) => {
    const shell = makeApp();
    res.send(shell);
};
