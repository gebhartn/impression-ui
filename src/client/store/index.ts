import React from 'react';
import { types, Instance, SnapshotIn } from 'mobx-state-tree';

export const Store = types
    .model('Store', {
        init: 'Hello, world',
    })
    .actions(self => ({
        setInit(_init: string) {
            self.init = _init;
        },
    }))
    .views(self => ({
        get initUpperCase() {
            return self.init.toUpperCase();
        },
    }));

export type IStore = Instance<typeof Store>;
export type IStoreIn = SnapshotIn<typeof Store>;

const StoreContext = React.createContext<null | IStore>(null);

export const Provider = StoreContext.Provider;
export const useStore = (): IStore => {
    const store = React.useContext(StoreContext);
    if (!store) {
        console.log('store', store);
        throw new Error('Store cannot be null - add a context provider');
    }
    return store;
};
