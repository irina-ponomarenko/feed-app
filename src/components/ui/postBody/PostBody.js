import React from "react";

const PostBody = (props) => {
    return (
        <div className="post-body">
            {props.children}
        </div>
    );
};

export default PostBody;