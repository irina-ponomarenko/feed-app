import React from "react";

import "./followBlock.css";

const FollowBlock = (props) => {
    return (
        <div className="follow-block">
            {props.children}
        </div>
    );
};

export default FollowBlock;