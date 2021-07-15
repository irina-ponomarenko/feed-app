import React from "react";
import AvatarSmall from "../ui/avatarSmall/AvatarSmall";
import GreenStatus from "../ui/greenStatus/GreenStatus";
import TitleHeaderPost from "../titleHeaderPost/TitleHeaderPost";

import "./headerPost.css";
import More from "../ui/more/More";
import DropDownMore from "../dropDownMore/DropDownMore";

const HeaderPost = (props) => {
    return (
        <div className="header-post">
            <div className="header-info">
                <AvatarSmall
                    img={props.avatar}
                    alt="avatar post writer"
                    statusClass="active-status"
                    status={<GreenStatus/>}
                />
                <TitleHeaderPost
                    titleHeader={props.titleHeader}
                    typePost={props.typePost}
                    datePost={props.datePost}
                />
            </div>
            <div>
                <More>
                    <DropDownMore/>
                </More>
            </div>
        </div>
    );
};

export default HeaderPost;