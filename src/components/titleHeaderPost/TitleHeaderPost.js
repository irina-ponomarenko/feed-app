import React from "react";
import {Link} from "react-router-dom";

import "./titleHeaderPost.css";

const TitleHeaderPost = (props) => {
    return (
        <div className="title-header-post">
            <div className="title-name">
                <Link to="">
                    {props.titleHeader}
                </Link>
                <span>
                    {props.typePost}
                </span>
            </div>
            <div className="date-public">
                <span className="title-public">
                    Published:
                </span>
                <span className="date">
                    {props.datePost}
                </span>
            </div>
        </div>
    );
};

export default TitleHeaderPost;