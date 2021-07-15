import React from "react";
import {Link} from "react-router-dom";

import "./titlePost.css";

const TitlePost = (props) => {
    return (
        <Link to={props.link} className={"title-post " + props.extraClass}>
            {props.title}
        </Link>
    );
};

TitlePost.defaultProps = {
    extraClass: "",
    link: ""
}

export default TitlePost;