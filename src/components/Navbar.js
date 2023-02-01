import React from "react";
import argentBankLogo from "../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    return (

		<>
        <nav className="main-nav">
            <NavLink to="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
            </NavLink>
            
                <div className="main-nav-login ">
                    <div className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Tony Montana
                    </div>
                    <div className="main-nav-item">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </div>
                </div>
                <NavLink to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
        </nav>
    </>
    )
}

export default NavBar;