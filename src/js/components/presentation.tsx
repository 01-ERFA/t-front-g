import React, { useContext } from "react";

import { Context } from "../store";

import Img from "../../img/74a6edf440e4a985596946c74913b723.jpg";


const Presentation = ()=>{
    const { store, actions } = useContext(Context)!;

    // Estan fallando los ICONOS


    return (
        <div className="card mb-3 p-3">
            <div className="row g-0">
                <div className="col-2 d-sm-none" />
                <div className="col-8 col-sm-2 d-flex justify-content-center flex-column">
                    <img src={Img} className="img-fluid rounded-start" alt="Profile" />
                </div>
                <div className="col-12 col-sm-10">
                    <div className="card-body">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text text-start">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer. You can add more details about yourself here to explain
                            more in-depth. You could talk about your skills, experiences, hobbies, or anything else that
                            represents you. The text will now wrap in smaller screens to look better.
                        </p>            
                        <div className="d-none d-sm-block">
                            <a href="https://www.facebook.com" className="btn btn-primary m-1" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href="https://www.twitter.com" className="btn btn-info m-1" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a href="https://www.linkedin.com" className="btn btn-primary m-1" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i> LinkedIn
                            </a>
                            <a href="https://www.instagram.com" className="btn btn-danger m-1" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer text-center d-block d-sm-none">
                <a href="https://www.facebook.com" className="btn btn-primary m-1" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://www.twitter.com" className="btn btn-info m-1" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://www.linkedin.com" className="btn btn-primary m-1" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
                <a href="https://www.instagram.com" className="btn btn-danger m-1" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> Instagram
                </a>
            </div>
        </div>
    );
};

export default Presentation;