import React from "react";

import "./input.css";

const Input = React.forwardRef((props, ref) => (<input type={props.type} ref={ref} className={"input-field " + props.extraClass} placeholder={props.placeholder} />));

export default Input;