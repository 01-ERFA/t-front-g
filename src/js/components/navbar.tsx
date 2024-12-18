import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Context } from "../store";


const NavBar = () => {
    const { store, actions } = useContext(Context)!;
    const navigate = useNavigate()

    const isMobile = (): boolean =>  store.currentDevice === store.deviceTypes.MOBILE;

    const [ showSearch, setShowSearch ] = useState(!isMobile());
    const [ showLogo, setShowLogo ] = useState(true);
    const [ valueSearch, setValueSearch ] = useState('');


    const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // 
        if (!showSearch) {
            setShowSearch(true);
            setShowLogo(false);
        } else {
            // Search
            navigate(`/q/${valueSearch}`)
            
            // Restore
            setShowSearch(!isMobile());
            setShowLogo(true);
            // setValueSearch(''); Clean entry?
        };
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(actions.sanitizeInput(e.currentTarget.value));
    };


    useEffect(() => { 
        setShowSearch(!isMobile());
        setShowLogo(true);
    }, [store.currentDevice]);


    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link 
                    to='/'
                    className={`navbar-brand py-0 ${showLogo ? '' : 'd-none'}`}
                    style={{cursor: 'pointer'}}
                >
                    Navbar
                </Link>
                <div className="d-flex">
                    <div className="d-flex"> {/* <form> </form> -> onEnter => onClick() */}
                        <input 
                            type="search" 
                            className={`form-control me-2 py-0 ${showSearch ? '' : 'd-none'}`} 
                            placeholder="Search" 
                            aria-label="Search"
                            value={valueSearch}
                            onChange={handleInputChange}
                         />
                        <button 
                            type="button" 
                            className="btn btn-outline-success me-2"
                            onClick={handleSearchClick}
                        >
                            Search
                        </button>
                    </div>
                    <Link 
                        to='/login'
                        type="button" 
                        className="btn btn-outline-secondary"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;