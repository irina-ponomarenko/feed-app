import React from "react";

import "./newPost.css";
import HeaderPost from "../headerPost/HeaderPost";
import PostBody from "../ui/postBody/PostBody";
import TitlePost from "../ui/titlePost/TitlePost";
import TextPostBody from "../ui/textPostBody/TextPostBody";
import FollowBlock from "../followBlock/FollowBlock";
import WatchInfoPost from "../watchInfoPost/WatchInfoPost";
import GreyLinkBtn from "../ui/greyLinkBtn/GreyLinkBtn";
import Emoji from "../emojis/FacebookEmoji";
import EmojiState from "../emojiState/EmojiState";



const NewPost = (props) => {
    const listBtn = [
        {
            title: "Like",
            link: "",
            extraClass: "like",
            emoji: <Emoji
                extraClass="containerEmoji"
            />
        },
        {
            title: "Comment",
            link: "",
            extraClass: "comment",
        },
        {
            title: "Share",
            link: "",
            extraClass: "share",
        },
    ];
    return (
        <div>
            <HeaderPost
                avatar={props.avatarSmall}
                statusClass={props.statusClass}
                titleHeader="Jack Carter"
                typePost="Share Post"
                datePost="Sep,15 2020"
            />
            <PostBody>
                <TitlePost
                    title="Supervision as a Personnel Development Device"
                />
                <TextPostBody
                    text="Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero."
                />
            </PostBody>
            <FollowBlock>
                <WatchInfoPost/>
                <div className="emotions-block">
                    <ul className="list-buttons">
                        {
                            listBtn.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <GreyLinkBtn
                                            link={item.link}
                                            title={item.title}
                                            extraClass={item.extraClass}
                                            emoji={item.emoji}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <EmojiState/>
                </div>
            </FollowBlock>
        </div>
    );
};

export default NewPost;