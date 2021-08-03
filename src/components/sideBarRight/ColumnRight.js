import React from "react";
import Block from "../ui/block/Block";
import TitleBlock from "../ui/titleBlock/TitleBlock";
import GroupInfo from "../groupInfo/GroupInfo";

import YourGroup1  from "../../assets/images/your-group1.jpeg";
import YourGroup2 from "../../assets/images/your-group2.jpeg";
import CarouselBlock from "../ui/carousel/CarouselBlock";
import CarouselAdvertising from "../causelAdvertising/CrouselAdvertising";
import LongButton from "../ui/longButton/LongButton";

import SideBar1 from "../../assets/images/advertising/sidebar-info.jpeg";
import SideBar2 from "../../assets/images/advertising/sidebar-info2.jpeg";
import GroupUser1 from "../../assets/images/users/frnd-figure2.jpeg";
import GroupUser2 from "../../assets/images/users/frnd-figure3.jpeg";

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

    const listAdvertising = [
        {
            image: SideBar1,
            alt: "Side Bar Bg",
            member: "505k",
            userAvatar: GroupUser1,
            altUser: "Group Interface Icon",
            linkUser: "",
            title: "Social Research",
            subTitle: "@biolabest",
            buttonCarousel: <LongButton
                                nameButton="Join Community"
                            />,
        },
        {
            image: SideBar2,
            alt: "Side Bar Bg",
            member: "505k",
            userAvatar: GroupUser2,
            altUser: "Group Interface Icon",
            linkUser: "",
            title: "Bio Labest Group",
            subTitle: "@biolabest",
            buttonCarousel: <LongButton
                                nameButton="Join Community"
                            />,
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
            <Block>
                <TitleBlock
                    title="Suggested Group"
                />
                <CarouselBlock
                    extraClass="advertising-carousel"
                >
                    {
                        listAdvertising.map((item, index) => {
                            return(
                                <CarouselAdvertising
                                    key={index}
                                    image={item.image}
                                    alt={item.alt}
                                    member={item.member}
                                    userAvatar={item.userAvatar}
                                    altUser={item.altUser}
                                    linkUser={item.linkUser}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                    buttonCarousel={item.buttonCarousel}
                                />
                            )
                        })
                    }
                </CarouselBlock>
            </Block>
        </div>
    );
};

export default ColumnRight;