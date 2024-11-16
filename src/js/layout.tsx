import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext, { Context } from "./store/appContext";

import Home from "./pages/home";


function Layout() {
    const { store } = useContext(Context)!;
    return (
        <>
            <BrowserRouter basename={store.basename} >
                <Routes>
                    <Route element={<Home />} path='/' />


                    <Route element={<>404 Not Found</>} path='*' />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default injectContext(Layout);