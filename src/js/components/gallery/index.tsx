import React, { ReactNode } from "react";
import { VerticalCard, VerticalCardPlaceHolder } from './card'


const Gallery: React.FC<{children: ReactNode}> = ({ children }) => {
    return (
        <div className="container-fluid text-center mt-3">
            <div className="row justify-content-center">
                {children}
            </div>
        </div>
    )
};


export default Gallery;
export { VerticalCard, VerticalCardPlaceHolder };