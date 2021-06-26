import React from "react";

import "./roundBtn.css";


const RoundBtn = (props) => {

    return(
        <button className="round-btn" onClick={props.handlerClick}>
            <img className={"svg " + props.class} src={props.url} alt={props.alt}/>
        </button>
    );
};

export default RoundBtn;