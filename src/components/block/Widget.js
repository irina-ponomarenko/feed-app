import React from "react";

import "./widget.css";
import {Link} from "react-router-dom";

const Widget = (props) => {
    const bgWidget = {
        backgroundImage: 'url(' + props.bgImg + ')',
    };

    return(
        <div className={"widget " + props.extraClass}>
            <div className="bg-block" style={bgWidget}></div>
            <img src={props.image} className="image-widget" alt="image widget"/>
            <h4 className="widget-title">
                {props.title}
            </h4>
            <span className="sub-title">
                {props.subTitle}
            </span>
            <div className="progress-outer">
                {props.progressbar}
            </div>
            <div className="date-time">
                <div className="time">
                <span className="hours">
                    {props.realTimeHours}
                </span>
                    <span className="dots">
                    {props.realTimeDots}
                </span>
                    <span className="minute">
                    {props.realTimeMin}
                </span>
                </div>
                <span className="date">
                    {props.date}
                </span>
            </div>
            <ul className="list-complete">
                <li className="item-complete">
                    <Link to="">
                        {props.profCompleteTitle1}
                    </Link>
                    <em className="percent-complete">
                        {props.profCompletePercent1}
                    </em>
                </li>
                <li className="item-complete">
                    <Link to="">
                        {props.profCompleteTitle2}
                    </Link>
                    <em className="percent-complete">
                        {props.profCompletePercent2}
                    </em>
                </li>
                <li className="item-complete">
                    <Link to="">
                        {props.profCompleteTitle3}
                    </Link>
                    <em className="percent-complete">
                        {props.profCompletePercent3}
                    </em>
                </li>
            </ul>
            <div className="body-widget-text">
                <p>
                    {props.bodyText}
                </p>
            </div>
            <button type="button" className="btn-blue small-blue widget-btn">
                {props.button}
            </button>

        </div>
    )
};

export default Widget;