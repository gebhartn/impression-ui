import * as React from 'react';
import { observer } from 'mobx-react';
import { useStore, IStore } from '../store';
import { Landing } from './Landing';

export const App = observer(() => {
    const store = useStore();
    const [value, setValue] = React.useState('');

    const handleChange = makeHandleChange(setValue);
    const handleSubmit = makeHandleSubmit(store);

    return (
        <>
            <h1>Our title: {store.init}</h1>
            <h1>Our title: {store.initUpperCase}</h1>
            <input onChange={handleChange} id="title" value={value} />
            <button onClick={() => handleSubmit(value)} type="submit">
                Change Title
            </button>

            <Landing />
        </>
    );
});
