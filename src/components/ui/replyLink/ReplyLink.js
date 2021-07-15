import React from "react";
import {Link} from "react-router-dom";

import "./replyLink.css";

const RepLy = (props) => <Link to={props.link} className={"reply " + props.extraClass}>Reply</Link>

RepLy.defaultProps = {
    extraClass: "",
    link: ""
};

export default RepLy;