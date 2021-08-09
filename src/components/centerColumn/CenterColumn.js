import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";

import Block from "../ui/block/Block";
import TitleBlock from "../ui/titleBlock/TitleBlock";
import Input from "../ui/input/Input";
import LinkButtonSquare from "../ui/linkButtonSquare/LinkButtonSquare";
import NewPost from "../newPost/NewPost";

import "./centerColumn.css";

import Image from "../../assets/images/image.png";
import Activity from "../../assets/images/activity.png";
import LiveStream from "../../assets/images/live-stream.png";
import AvatarPost from "../../assets/images/users/user1.jpeg";


const CenterColumn = (props) => {
    let newPostRef = React.createRef();
    let [showNewPost, setShowNewPost] = useState(false);
    console.log(props)

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            console.log("Local storage is empty");
            setShowNewPost(!showNewPost);
        }
    }, []);

    useEffect(() => {
        if(localStorage.getItem("token") !== null){
            setShowNewPost(true);
        }
        else {
            setShowNewPost(false);
        }

    }, [props.token]);

    const listBtnFilter = [
        {
            target: "_blank",
            textBtn: "Home",
            handlerClick: () => {

            }
        },
        {
            target: "_blank",
            textBtn: "Recent",
            handlerClick: () => {

            }
        },
        {
            target: "_blank",
            textBtn: "Favourite",
            handlerClick: () => {

            }
        }
    ];

    const listActions = [
        {
            link: "",
            image: Image,
            alt: "Image",
            title: "Photo/Video",
        },
        {
            link: "",
            image: Activity,
            alt: "Activity",
            title: "Feeling/Activity",
        },
        {
            link: "",
            image: LiveStream,
            alt: "Live Stream",
            title: "Live Stream",
        },
    ];

    return (
        <div className="center-column">
            <ul className="list-filters">
                {
                    listBtnFilter.map((item, index) => {
                        return (
                            <li key={index}>
                                <LinkButtonSquare
                                    target={item.target}
                                    textBtn={item.textBtn}
                                    handlerClick={item.handlerClick}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            {
                showNewPost
                    ?   <Block
                        extraClass="new-post"
                        ref={newPostRef}
                    >
                        <TitleBlock
                            title="Create New Post"
                        />
                        <div className="wrapper-input">
                            <Input
                                extraClass="add-post-input"
                                placeholder="Create New Post"
                            />
                        </div>
                        <ul className="list-actions">
                            {
                                listActions.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.link}>
                                                <i>
                                                    <img src={item.image} alt={item.alt}/>
                                                </i>
                                                <span>
                                            {item.title}
                                        </span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Block>
                    : null
            }
            <Block>
                <NewPost
                    avatarSmall={AvatarPost}
                    statusClass="active-status"
                />
            </Block>
        </div>

    );
};

function mapStateToProps(state) {
    return {
        token: state.userInfo.token,
    }
}


export default connect(mapStateToProps) (CenterColumn);