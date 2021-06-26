import React from "react";

import Block from "../ui/block/Block";
import TimeBlock from "../timeBlock/TimeBlock";
import TitleBlock from "../ui/titleBlock/TitleBlock";

import "./sideBarLeft.css";

const SideBarLeft = () => {
    return (
        <div className="column">
            <Block>
                <TimeBlock/>
            </Block>
            <Block>
                <TitleBlock
                    title="Complete Your Profile"
                />
            </Block>
        </div>
    );
};

export default SideBarLeft;