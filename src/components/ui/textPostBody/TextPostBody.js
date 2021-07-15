import React from "react";

import "./textPostBody.css";

const TextPostBody = (props) => <p className={"text-post-body " + props.extraClass}>{props.text}</p>

TextPostBody.defaultProps = {
    extraClass: "",
}

export default TextPostBody;