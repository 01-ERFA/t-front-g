import React, { useContext } from "react";

import { Context } from "../store";


const Login = () => {
    const { store, actions } = useContext(Context)!;

    return (
        <section style={{backgroundColor: "#12425c", borderRadius: "1rem"}}>
            <div className="container py-5 h-75">
                <div className="row d-flex justify-content-center align-items-center h-75">
                    <div className="col col-xl-10">
                        <div className="card" style={{border: "0", borderRadius: "1rem"}}>
                            <div className="row g-0">
                                <div className="col-md-4 col-lg-3 d-none d-md-flex align-items-center justify-content-center">
                                    <img src="https://data.moonscdn.com/prompt/slices/1/thumbnail/watermarked/abstract-liquid-gradient-blue-purple-black_uQBG9.png"
                                        alt="login form" className="img-fluid" style={{borderRadius: "1rem"}} />
                                </div>
                                <div className="col-md-8 col-lg-9">
                                    <h3 className="card-header">Login</h3>
                                    <div className="card-body p-2 text-black">

                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>

                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="button-addon2" />
                                        </div>
                                        
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Login;