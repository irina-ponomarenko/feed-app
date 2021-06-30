import React from "react";
import Clock from "react-live-clock";

import bgImg from "../../assets/images/time-bg.jpeg";
import clock from "../../assets/images/time-clock.png";

const TimeBlock = () => {

    const bgWidget = {
        backgroundImage: "url(" + bgImg + ")",
    };

    return (
        <div className="whitish">
            <div className="bg-block" style={bgWidget}></div>
            <img src={clock} className="image-widget" alt="image widget"/>
            <div className="date-time">
                <Clock
                    format={"hh:mm"}
                    style={{fontSize: "40px"}}
                    ticking={true}
                />
                <span className="date">
                    <Clock
                        format={"ddd, MMMM Mo, YYYY"}
                    />
                </span>
            </div>
        </div>
    );
};

export default TimeBlock;