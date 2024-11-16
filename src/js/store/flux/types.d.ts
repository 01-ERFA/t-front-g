export interface Store {
    // Define atributos globales
    
    basename: string;

    [name: string]: any;
};

export interface Actions {
    // Define las acciones y los setters de los atributos globales
    // Por ejemplo:
    // someAction: () => void;

    [name: string]: CallableFunction;
};

export interface StateParams {
    getStore: () => Store;
    getActions: () => Actions;
    // setStore: (updatedStore: Partial<Store>) => void; 
    setStore: (
        updated: keyof Store | Array<string | number> | Partial<Store>,
        newValue?: any,
        updater?: (oldValue: any, newValue: any) => any
    ) => void;    
}

export interface StateReturn {
    store: Store;
    actions: Actions;
};