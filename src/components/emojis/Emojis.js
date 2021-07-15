import React from "react";
import { FacebookEmoji } from "react-facebook-emoji";

const Emojis = () => {
    return (
        <div>
            <FacebookEmoji type="like"/>
            <FacebookEmoji type="love"/>
            <FacebookEmoji type="wow"/>
            <FacebookEmoji type="yay"/>
            <FacebookEmoji type="angry"/>
            <FacebookEmoji type="haha"/>
            <FacebookEmoji type="sad"/>
        </div>
    );
};


export default Emojis;
