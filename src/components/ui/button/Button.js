import React from "react";

import "./button.css";

const Button = (props) => <button type={props.type} className={"btn " + props.className}>{props.text}</button>

Button.defaultProps = {
    className: ""
};

export default Button;