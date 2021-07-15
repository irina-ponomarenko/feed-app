import React from "react";

const More = (props) => {
    return (
        <div className="more">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#088dcd"
                 stroke="#088dcd" strokeWidth="2"  strokeLinejoin="round"
                 className="feather feather-more-horizontal">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
            </svg>
            {props.children}
        </div>
    );
};

export default More;