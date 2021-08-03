import React from "react";
import {Link} from "react-router-dom";

import "./carousel-advertising.css";

const CarouselAdvertising = (props) => {
    return (
        <div className="friend-box">
            <figure>
                <img src={props.image} alt={props.alt}/>
                <span className="members">
                    <span>Members:</span>
                    {props.member}
                </span>
            </figure>
            <div className="body-box">
                <img src={props.userAvatar} alt={props.altUser}/>
                <div className="name-info">
                    <Link to={props.linkUser}>
                        {props.title}
                    </Link>
                    <span>
                        {props.subTitle}
                    </span>
                </div>
                {props.buttonCarousel}
            </div>
        </div>
    );
};

export default CarouselAdvertising;