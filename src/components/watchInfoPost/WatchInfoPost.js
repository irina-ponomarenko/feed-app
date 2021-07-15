import React from "react";

import "./watchInfo.css";

import Eye from "../../assets/images/eye.svg";
import Comment from "../../assets/images/comment.svg";
import Star from "../../assets/images/star.svg";
import Share from "../../assets/images/share.svg";
import ReplyLink from "../ui/replyLink/ReplyLink";

const WatchInfoPost = () => {
    const watchList = [
        {
            icon: Eye,
            value: "1.2k",
            className: "views"
        },
        {
            icon: Comment,
            value: "54",
            className: "comments"
        },
        {
            icon: Star,
            value: "5k",
            className: "follow"
        },
        {
            icon: Share,
            value: "205",
            className: "share-pst"
        }
    ];

    return (
        <div className="watch-block">
            <ul className="watch-list">
                {
                    watchList.map((item, index) => {
                        return(
                            <li key={index} className={"item-watch " + item.className}>
                                <img src={item.icon} alt="icon value watch"/>
                                <span className="value-watch">
                                {item.value}
                            </span>
                            </li>
                        )
                    })
                }
            </ul>
            <ReplyLink/>
        </div>
    );
};

export default WatchInfoPost;