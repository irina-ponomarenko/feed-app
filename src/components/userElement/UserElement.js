import React from "react";
import {Link} from "react-router-dom";

import user from "../../assets/images/user.jpeg";


const UserElement = () => {
    return(
        <div className="user-dp">
            <Link to="" className="user-btn">
                <img src={user} alt="user"/>
                <div className="name">
                    <h4>
                        Danial Cardos
                    </h4>
                </div>
            </Link>
        </div>
    )
};

export default UserElement;