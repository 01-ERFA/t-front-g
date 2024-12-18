import React, { useContext } from "react";

import { Context } from "../store";


const NotFound = ()=>{
    const { store, actions } = useContext(Context)!;

    

    return (
        <>
            <h1>404 NotFound</h1>
        </>
    );
};

export default NotFound;