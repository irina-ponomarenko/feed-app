import React from "react";

import "./button.css";

const Button = (props) => <button type={props.type} onClick={props.onClick} className={"btn " + props.className}>{props.text}</button>

Button.defaultProps = {
    className: "",

};

export default Button;