import React from "react";

import Block from "../ui/block/Block";
import TimeBlock from "../timeBlock/TimeBlock";
import TitleBlock from "../ui/titleBlock/TitleBlock";

import "./sideBarLeft.css";
import CompleteProf from "../completeProfile/CompleteProf";

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
                <CompleteProf />
            </Block>
        </div>
    );
};

export default SideBarLeft;