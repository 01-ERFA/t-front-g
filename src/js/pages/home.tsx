import React, { useContext } from "react";

import { Context } from "../store/appContext";


const Home = ()=>{
    const { store, actions } = useContext(Context)!;

    return (
        <>
            <h1>Home</h1>
        </>
    );
};

export default Home;