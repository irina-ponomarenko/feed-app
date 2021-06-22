import React from "react";
import Logo from "../logo/Logo";


import "./header.css";
import WebElements from "../webElements/WebElements";

const Header = () => {
    return(
        <header className="header">
            <div className="topbar is_stuck">
                <div className="container-center header-container">
                    <Logo />
                    <WebElements />
                </div>
            </div>
        </header>
    )
};

export default Header;