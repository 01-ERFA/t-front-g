import React from "react";


interface CardData {
    title: string;
    img: string;
    description: string
}


const VerticalCard = ({title, img, description}: CardData) => {
    return (
        <div className="col-xll-2 col-lg-3 col-md-4 col-sm-6" style={{maxWidth: "22rem"}}>
            <div className="card mb-5">
                <img 
                    className="card-img-top img-thumbnail"
                    src={img}
                />
                <div className="card-body p-5">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{/* text-truncate */}{description}</p>
                    <button className="btn btn-outline-primary">Learn more</button>
                </div>
            </div>
        </div>
    );
};

const HorizontalCard = () => {
    return (
        <></>
    );
};

const VerticalCardPlaceHolder = () => {
    return (
        <div className="col-xll-2 col-lg-3 col-md-4 col-sm-6" style={{maxWidth: "22rem"}}>
            <div className="card mb-5" aria-hidden="true">
                <svg className="placeholder bd-placeholder-img card-img-top" width="100%" height="180" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                {/* xmlns="http://www.w3.org/2000/svg" */}
                    <title></title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>
                <div className="card-body p-5">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-12"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-5"></span>
                        <span className="placeholder col-8"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-2"></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const HorizontalCardPlaceHolder = () => {
    return (
        <div className="card mb-3 me-2" style={{maxWidth: "18rem"}}>
            <div className="row g-0">
                <div className="col">
                    <div className="card-body d-flex align-items-center">
                        <svg className="placeholder bd-placeholder-img col-4" 
                            width="100%"
                            height="60"
                            role="img" 
                            aria-label="Placeholder" 
                            preserveAspectRatio="xMidYMid slice" 
                            focusable="false"
                            style={{borderRadius: "0.4rem"}}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title></title>
                            <rect width="100%" height="100%" fill="#868e96"></rect>
                        </svg>
                        <h5 className="card-title col-8"><span className="placeholder col-10"></span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { 
    VerticalCard, VerticalCardPlaceHolder,
    HorizontalCard, HorizontalCardPlaceHolder
};