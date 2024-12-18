import { DeviceType } from "./types";  

export interface Store {
    // Define atributos globales
    
    basename: string;
    deviceTypes: typeof DeviceType;
    currentDevice: DeviceType;

    authUser: boolean;

    // [name: string]: any;
};

export interface Actions {
    // Define las acciones y los setters de los atributos globales
    // Por ejemplo:
    // someAction: () => void;
    
    setDeviceType: () => void;
    sanitizeInput: (s: string) => string;
    autoLogin: () => void;
    contactWpp: () => void;

    // [name: string]: CallableFunction;
};

export interface StateParams {
    getStore: () => Store;
    getActions: () => Actions; 
    setStore: (updatedStore: Partial<Store>) => void;    
}

export interface StateReturn {
    store: Store;
    actions: Actions;
};