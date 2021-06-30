import React from "react";
import {Link} from "react-router-dom";

import "./linkBtnSquare.css";

const LinkButtonSquare = (props) => <Link to="" className="square-btn" target={props.target} onClick={props.handlerClick}>{props.textBtn}</Link>

export default LinkButtonSquare;