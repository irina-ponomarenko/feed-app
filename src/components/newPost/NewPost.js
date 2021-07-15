import React from "react";
import HeaderPost from "../headerPost/HeaderPost";
import PostBody from "../ui/postBody/PostBody";
import TitlePost from "../ui/titlePost/TitlePost";
import TextPostBody from "../ui/textPostBody/TextPostBody";


const NewPost = (props) => {
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
        </div>
    );
};

export default NewPost;