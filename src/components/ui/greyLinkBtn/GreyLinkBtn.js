import React from "react";
import {Link} from "react-router-dom";
import "./greyLink.css";

const GreyLinkBtn = (props) => {
    return (
        <Link
            to={props.link}
            className={"grey-btn " + props.extraClass}
        >
            {props.title}
        </Link>
    );
};

GreyLinkBtn.defaultProps = {
    link: "",
    extraClass: ""
};

export default GreyLinkBtn;