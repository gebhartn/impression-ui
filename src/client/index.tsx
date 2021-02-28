import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './pages';

hydrate(
    <Router>
        <App />
    </Router>,
    document.getElementById('impression-ui'),
);

if (module.hot) {
    module.hot.accept();
}
