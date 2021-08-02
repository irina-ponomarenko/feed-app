import React from "react";

import { FacebookSelector } from "@charkour/react-reactions";

import "./emoji.css";

const Emoji = (props) => {
    return (
      <div className={props.extraClass}>
          <FacebookSelector />
      </div>
    );
};

export default Emoji;
