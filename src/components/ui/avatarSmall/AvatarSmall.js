import React from "react";

import "./avatarSmall.css";

const AvatarSmall = (props) => {
    return (
        <figure className={"avatar-small " + props.extraClass}>
            <div className={props.statusClass}>
                {props.status}
            </div>
            <img src={props.img} alt={props.alt}/>
        </figure>
    );
};

AvatarSmall.defaultProps = {
    extraClass: ""
};

export default AvatarSmall;