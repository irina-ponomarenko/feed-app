import React from "react";

import "./input.css";

const Input = (props) => <input type={props.type} className="input-field" placeholder={props.placeholder} />

export default Input;