import React from "react";

import "./dropDownMore.css";

import Pen from "../../assets/images/pen.svg";
import Block from "../../assets/images/block.svg";
import Delete from "../../assets/images/trash.svg";
import Repost from "../../assets/images/flag.svg";

const DropDownMore = () => {
    const listMore = [
        {
            icon: Pen,
            title: "Edit Post",
            text: "Edit This Post within a Hour"
        },
        {
            icon: Block,
            title: "Hide Post",
            text: "Hide This Post"
        },
        {
            icon: Delete,
            title: "Delete Post",
            text: "If inappropriate Post By Mistake"
        },
        {
            icon: Repost,
            title: "Report",
            text: "Inappropriate content"
        }
    ];
    return (
        <React.Fragment>

            <ul className="list-more">
                {
                    listMore.map((item, index) => {
                        return(
                            <li key={index} className="item-more">
                                <img src={item.icon} alt="icon"/>
                                <div className="header-more-item">
                                    <h4>
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.text}
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    );
};

export default DropDownMore;