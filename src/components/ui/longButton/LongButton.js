import React from "react";
import {Link} from "react-router-dom";

import "./long-button.css";

const LongButton = (props) => {
    return (
        <Link to={props.linkBtn} className={"long-btn" + props.extraClass}>
            {props.nameButton}
        </Link>
    );
};

LongButton.defaultProps = {
    extraClass: "",
    linkBtn: "#",
};

export default LongButton;