import React, { useState } from "react";

import "./webElements.css";

import  noise from  "../../assets/images/noise.svg";
import  house from  "../../assets/images/house.svg";
import  message from  "../../assets/images/message.svg";
import  bell from  "../../assets/images/bell.svg";
import  plus from  "../../assets/images/plus.svg";
import  blocks from  "../../assets/images/blocks.svg";
import  sign from  "../../assets/images/user-login.svg";
import FormSign from "../formSign/FormSign";


import RoundBtn from "../ui/roundBtn/RoundBtn";
import UserElement from "../userElement/UserElement";
import Popup from "../ui/popup/Popup";



const WebElements = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    let closeModal = () => {
      setIsOpenModal(false);
    };

    const webElementsList = [
        {
            url: noise,
            alt: "noise",
            target: true,
            class: "",
            handlerClick: (event) => {
                event.preventDefault();
            }
        },
        {
            url: house,
            alt: "house",
            target: true,
            class: "",
            handlerClick: (event) => {
                event.preventDefault();
            }
        },
        {
            url: message,
            alt: "message",
            target: true,
            class: "",
            handlerClick: (event) => {
                event.preventDefault();
            }
        },
        {
            url: bell,
            alt: "bell",
            target: true,
            class: "",
            handlerClick: (event) => {
                event.preventDefault();
            }
        },
        {
            url: plus,
            alt: "plus",
            target: true,
            class: "",
            handlerClick: (event) => {
                event.preventDefault();
            }
        },
        {
            url: blocks,
            alt: "blocks",
            target: true,
            class: "",
            handlerClick: (event) => {
                event.preventDefault();
            }
        },
        {
            url: sign,
            alt: "sign",
            target: true,
            class: "sign-btn",
            handlerClick: () => {
                setIsOpenModal(true);
            }
        },
    ];

    return (
        <React.Fragment>
            <div className="web-elements">
                <UserElement/>

                <ul className="web-elements-list">

                    {
                        webElementsList.map((item, index) => {
                            return(
                                <li className="web-element-item" key={index}>
                                    <RoundBtn
                                        url={item.url}
                                        alt={item.alt}
                                        target={item.target}
                                        class={item.class}
                                        handlerClick={item.handlerClick}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Popup
                title="Sign In"
                isOpen={isOpenModal}
                closeModal={closeModal}
            >
               <FormSign/>
            </Popup>
        </React.Fragment>
    );
};

export default WebElements;