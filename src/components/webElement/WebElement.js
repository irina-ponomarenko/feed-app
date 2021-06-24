import React from "react";

import "./webElement.css";


const WebElement = (props) => {

    const isBlank =  props.target ? "_blank" : "";

    return(
        <button to="" className="web-element" onClick={props.handlerClick}  target={isBlank}>
            <img className={"svg " + props.class} src={props.url} alt={props.alt}/>
        </button>
    )
};

export default WebElement;