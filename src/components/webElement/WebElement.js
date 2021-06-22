import React from "react";
import {Link} from "react-router-dom";

import "./webElement.css";


const WebElement = (props) => {

    const isBlank =  props.target ? "_blank" : "";

    return(
        <Link to="" className="web-element" target={isBlank}>
            <img className={"svg " + props.class} src={props.url} alt={props.alt}/>
        </Link>
    )
};

export default WebElement;