import React from "react";
import {Link} from "react-router-dom";

import "./emoji-state.css";

import Thumb from "../../assets/images/thumb.png";
import Heart from "../../assets/images/heart.png";
import Smile from "../../assets/images/smile.png";
import Weep from "../../assets/images/weep.png";


const EmojiState = () => {
    let emotionStateList = [
        {
            image: Thumb,
            alt: "Thumb",
            href: "",
            name: "Likes",
            nameList: {
                name1: "Jhon Doe",
                name2: "Amara Sin",
                name3: "Sarah K.",
                more: "20"
            }
        },
        {
            image: Heart,
            alt: "Heart",
            href: "",
            name: "Love",
            nameList: {
                name1: "Amara Sin",
                name2: "Jhon Doe",
                name3: "",
                more: "10"
            }
        },
        {
            image: Smile,
            alt: "Smile",
            href: "",
            name: "Happy",
            nameList: {
                name1: "Sarah K.",
                name2: "Jhon Doe",
                name3: "Amara Sin",
                more: "100"
            }
        },
        {
            image: Weep,
            alt: "Weep",
            href: "",
            name: "Dislike",
            nameList: {
                name1: "Danial Carbal",
                name2: "Amara Sin",
                more: "15"
            }
        },
    ];

    return (
        <div className="emoji-state">
            {
                emotionStateList.map((item, index) => {
                    return(
                        <div className="popover-wrapper" key={index}>
                            <Link to={item.href} className="popover-title">
                                <img alt="" src={item.image}/>
                            </Link>
                            <div className="popover-content">
                                <div>
                                    <img alt="" src={item.image}/>
                                    <span>{item.name}</span>
                                </div>
                                <ul className="namelist">
                                    <li>
                                        {item.nameList.name1}
                                    </li>
                                    <li>
                                        {item.nameList.name2}
                                    </li>
                                    <li>
                                        {item.nameList.name3}
                                    </li>
                                    <li>
                                        <span>{item.nameList.more}+ more</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
            <p>10+</p>
        </div>
    );
};

export default EmojiState;