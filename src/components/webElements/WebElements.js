import React from "react";

import "./webElements.css";

import  noise from  "../../assets/images/noise.svg";
import  house from  "../../assets/images/house.svg";
import  message from  "../../assets/images/message.svg";
import  bell from  "../../assets/images/bell.svg";
import  plus from  "../../assets/images/plus.svg";
import  blocks from  "../../assets/images/blocks.svg";
import  sign from  "../../assets/images/user-login.svg";


import WebElement from "../webElement/WebElement";
import UserElement from "../userElement/UserElement";


const WebElements = () => {

    const webElementsList = [
        {
            url: noise,
            alt: "noise",
            target: true,
            class: "",
        },
        {
            url: house,
            alt: "house",
            target: true,
            class: "",
        },
        {
            url: message,
            alt: "message",
            target: true,
            class: "",
        },
        {
            url: bell,
            alt: "bell",
            target: true,
            class: "",
        },
        {
            url: plus,
            alt: "plus",
            target: true,
            class: "",
        },
        {
            url: blocks,
            alt: "blocks",
            target: true,
            class: "",
        },
        {
            url: sign,
            alt: "sign",
            target: true,
            class: "sign-btn",
        },

    ]
    return(
        <div className="web-elements">
           <UserElement/>

            <ul className="web-elements-list">

                {
                    webElementsList.map((item, index) => {
                        return(
                            <li className="web-element-item" key={index}>
                                <WebElement
                                    url={item.url}
                                    alt={item.alt}
                                    target={item.target}
                                    class={item.class}
                                />
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
};

export default WebElements;