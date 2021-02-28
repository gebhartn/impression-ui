import * as React from 'react';
import { types, Instance, SnapshotIn } from 'mobx-state-tree';

export const Store = types
    .model('Store', {})
    .actions(() => ({}))
    .views(() => ({}));

export type IStore = Instance<typeof Store>;
export type IStoreIn = SnapshotIn<typeof Store>;

const StoreContext = React.createContext<null | IStore>(null);

export const Provider = StoreContext.Provider;
export const useStore = (): IStore => {
    const store = React.useContext(StoreContext);
    if (!store) {
        throw new Error('Store cannot be null - add a context provider');
    }
    return store;
};
