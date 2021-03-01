import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './pages';
import { Store, IStore, Provider } from './store';

declare const module: NodeModule;

const store: IStore = Store.create({});
console.log('hello');

const doHydrate = () => {
    const method = module.hot ? render : hydrate;
    method(
        <Provider value={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        document.getElementById('impression-ui'),
    );
};

doHydrate();

if (module.hot) {
    module.hot.accept('./pages', () => doHydrate());
}
