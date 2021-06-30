import React from "react";
import ProgressCircle from "../progressCircle/ProgressCircle";

import "./completeProf.css";
import {Link} from "react-router-dom";

const CompleteProf = () => {
    const profList = [
        {
            textProf: "Upload Your Picture",
            percentProf: "10%"
        },
        {
            textProf: "Your University?",
            percentProf: "20%"
        },
        {
            textProf: "Add Payment Method",
            percentProf: "20%"
        },
    ]
    return (
        <div>
            <h3 className="title-complete">Your Profile is missing followings!</h3>
            <div className="wrapper-progress">
                <ProgressCircle />
            </div>
            <ul className="listProf">
                {
                    profList.map((item, index) => {
                        return (
                            <li className="item-prof" key={index}>
                                <Link to="">
                                    {item.textProf}
                                </Link>
                                <em>
                                    {item.percentProf}
                                </em>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default CompleteProf;