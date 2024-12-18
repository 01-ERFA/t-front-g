import React, { useState, useEffect } from "react";
import { produce } from "immer";

import { Actions, StateReturn, Store } from './flux/base';
import { getState } from "./flux";


export const Context = React.createContext<StateReturn | null>(null);

function injectContext(PassedComponent : React.ComponentType<any>) {
    function StoreWrapper(props: any) {
        const [state, setState] = useState<StateReturn>(
            getState({
                getStore: () : Store => state.store,
                getActions:() : Actions => state.actions,
                setStore: (updatedStore: Partial<Store>) => 
                    setState({
                        ...state,
                        store: Object.assign(state.store, updatedStore)
                    })
            })
        );

        useEffect(() => {
            window.addEventListener('resize', state.actions.setDeviceType);
            
            state.actions.setDeviceType();
            state.actions.autoLogin();

        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;