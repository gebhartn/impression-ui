import * as React from 'react';
import { IStore } from '../store';

type InputHandler = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.FormEvent<HTMLInputElement>) => void;
type SubmitHandler = (store: IStore) => (value: string) => void;

export const makeHandleChange: InputHandler = setter => e => {
    setter(e.currentTarget.value);
};
export const makeHandleSubmit: SubmitHandler = store => value => {
    store.setInit(value);
};
