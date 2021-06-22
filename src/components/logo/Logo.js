import React from "react";
import {Link} from "react-router-dom";

import "./logo.css";
import logo from "../../assets/images/logo.png";

const Logo = () => {
    return(
        <Link to="/" className="logo-link">
            <div className="logo">
                <img src={ logo } alt="logo"/>
            </div>
            <span>
                Socimo
            </span>
        </Link>
    )
}

export default Logo;