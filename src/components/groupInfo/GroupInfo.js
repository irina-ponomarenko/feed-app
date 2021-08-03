import React from "react";
import {Link} from "react-router-dom";

import "./group-info.css";

const GroupInfo = (props) => {
    return (
        <React.Fragment>
            <div className="container-icon">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className="counter-notifications">
                <h3 className={"name-group" + props.extraClass}>
                    {props.nameGroup}
                </h3>
                <Link to={props.linkNotifications} className="link-name-notifications">
                    <span className="name-notifications">
                        {props.nameNotifications}
                    </span>
                    <span className="value-notification">
                        {props.valueNotifications}
                    </span>
                </Link>
                <Link to={props.feedViewLink} className="feed-group">
                    {props.feedViewName}
                </Link>
            </div>
        </React.Fragment>
    );
};

GroupInfo.defaultProps = {
    extraClass: "",
    feedViewLink: "#",
    linkNotifications: "#",
};

export default GroupInfo;