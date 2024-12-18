import { StateParams, StateReturn } from './base';
import { DeviceType } from './types';
import { initActions } from "./actions";


function getState({ getStore, getActions, setStore }: StateParams): StateReturn {
    return {
        store: {
            basename: process.env.BASENAME || '/',
            deviceTypes: DeviceType,
            currentDevice: DeviceType.MOBILE,
            authUser: false
        },
        actions: initActions({getStore, getActions, setStore})
    };
};

export { getState };