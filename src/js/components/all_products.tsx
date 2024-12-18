import React, { useContext } from "react";

import { Context } from "../store";

import Gallery, { VerticalCard, VerticalCardPlaceHolder } from "./gallery";


const AllProducts = ()=>{
    const { store, actions } = useContext(Context)!;

    return (
        <Gallery>
            <VerticalCardPlaceHolder />
            <VerticalCardPlaceHolder />
            <VerticalCardPlaceHolder />
            <VerticalCardPlaceHolder />
        </Gallery>
    );
};

export default AllProducts;