import React, { useState, useEffect } from "react";
import { produce } from "immer";

import { Actions, StateReturn, Store } from './flux/types';
import { getState } from "./flux";


export const Context = React.createContext<StateReturn | null>(null);

function injectContext(PassedComponent : React.ComponentType<any>) {
    function StoreWrapper(props: any) {
        const [state, setState] = useState<StateReturn>(
            getState({
                getStore: () : Store => state.store,
                getActions:() : Actions => state.actions,
                // Old:
                // setStore: (updatedStore) => {
                //     setState({
                //         ...state,
                //         store: Object.assign(state.store, updatedStore),
                //         // actions: { ...state.actions },
                //     })
                // }
                // New:
                setStore: (updated, newValue?, updater?) => 
                    setState(
                        produce(state, (draftState) => {
                            if (typeof updated === 'string') {
                                draftState.store[updated] = updater
                                    ? updater(draftState.store[updated], newValue)
                                    : newValue;
                            }
                            else if (Array.isArray(updated)) {
                                const path = updated;
                                if (path.length === 0) {
                                    throw new Error("Path must not be empty.");
                                };

                                let current: any = draftState.store;
                                
                                for (let i = 0; i < path.length -1; i++) {
                                    current = current[path[i]];
                                };
  
                                const lastKey = path[path.length - 1];
                                current[lastKey] = updater
                                    ? updater(current[lastKey], newValue)
                                    : newValue;
                            } else {
                                draftState.store = updater
                                    ? updater(draftState.store, updated)
                                    : { ...draftState.store, ...updated as Partial<Store> };
                            };
                        })
                    )
            }));

        useEffect(() => {

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