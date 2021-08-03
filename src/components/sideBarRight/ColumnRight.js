import React from "react";
import Block from "../ui/block/Block";
import TitleBlock from "../ui/titleBlock/TitleBlock";
import GroupInfo from "../groupInfo/GroupInfo";

import YourGroup1  from "../../assets/images/your-group1.jpeg";
import YourGroup2 from "../../assets/images/your-group2.jpeg";

const ColumnRight = () => {
    const listGroups = [
        {
            image: YourGroup1,
            alt: "your group icon",
            extraClass: "",
            nameGroup: "Good Group",
            nameNotifications: "Notifications",
            linkNotifications: "",
            valueNotifications: "13",
            feedViewLink: "",
            feedViewName: "view feed",
        },
        {
            image: YourGroup2,
            alt: "your group icon2",
            extraClass: "",
            nameGroup: "E-course Group",
            nameNotifications: "Notifications",
            linkNotifications: "",
            valueNotifications: "13",
            feedViewLink: "",
            feedViewName: "view feed",
        },
    ];
    return (
        <div className="column">
            <Block>
                <TitleBlock
                    title="Your Groups"
                />
                <ul className="list-group">
                    {
                        listGroups.map((item, index) => {
                            return(
                                <li key={index}>
                                    <GroupInfo
                                        image={item.image}
                                        alt={item.alt}
                                        extraClass={item.extraClass}
                                        nameGroup={item.nameGroup}
                                        nameNotifications={item.nameNotifications}
                                        valueNotifications={item.valueNotifications}
                                        feedViewLink={item.feedViewLink}
                                        feedViewName={item.feedViewName}
                                        linkNotifications={item.linkNotifications}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </Block>
        </div>
    );
};

export default ColumnRight;