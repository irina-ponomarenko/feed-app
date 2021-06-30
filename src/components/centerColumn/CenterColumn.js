import React from "react";
import LinkButtonSquare from "../ui/linkButtonSquare/LinkButtonSquare";

import "./centerColumn.css";
import Block from "../ui/block/Block";
import TitleBlock from "../ui/titleBlock/TitleBlock";

const CenterColumn = () => {
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
    ]
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
            <Block>
                <TitleBlock
                    title="Create New Post"
                />
            </Block>
        </div>

    );
};

export default CenterColumn;