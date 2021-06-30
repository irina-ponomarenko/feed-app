import React from "react";
import LinkButtonSquare from "../ui/linkButtonSquare/LinkButtonSquare";

import "./centerColumn.css";

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
        </div>

    );
};

export default CenterColumn;