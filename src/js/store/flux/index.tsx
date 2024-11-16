import { StateParams, StateReturn } from './types';
import { initActions } from "./actions";


function getState({ getStore, getActions, setStore }: StateParams): StateReturn {
    return {
        store: {
            basename: process.env.BASENAME ||'/',
        },
        actions: initActions({getStore, getActions, setStore})
    };
};

export { getState };