import React from "react";

import Widget from "../block/Widget";

import Clock from "../../assets/images/time-clock.png";
import TimeBg from "../../assets/images/time-bg.jpeg";

const Column = () => {

    const listWidgetsLeft = [
        {
            title: "",
            extraClass: "whitish",
            subTitle: "",
            img: Clock,
            bgImage: TimeBg,
            realTime: {
                hours: "",
                point: ":",
                min: ""

            },
            date: "Thu, 24 June 2021",
            progressBar: "",
            button: {
                textButton: ""
            },
            profComplete: {
                firstItem: {
                    titleProf1: "",
                    percent1: "",
                },
                secondItem: {
                    titleProf2: "",
                    percent2: "",
                },
                thirdItem: {
                    titleProf3: "",
                    percent3: "",
                }
            }

        },
        {
            title: "Complete Your Profile",
            extraClass: "",
            subTitle: "Your Profile is missing followings!",
            img: "",
            bgImage: "",
            realTime: {
                hours: "",
                point: ":",
                min: ""

            },
            date: "",
            progressBar: "",
            button: {
                textButton: ""
            },
            profComplete: {
                firstItem: {
                    titleProf1: "Upload Your Picture",
                    percent1: "10%",
                },
                secondItem: {
                    titleProf2: "Your University?",
                    percent2: "20%",
                },
                thirdItem: {
                    titleProf3: "Add Payment Method",
                    percent3: "20%",
                }
            }
        },
        {
            title: "Your profile has a new Experience section",
            extraClass: "experience",
            subTitle: "",
            img: "",
            bgImage: "",
            realTime: {
                hours: "",
                point: ":",
                min: ""

            },
            bodyText: "Showcase your professional experience and education to help potential employers and collaborators find and contact you about career opportunities.",
            date: "",
            progressBar: "",
            button: {
                textButton: "view profile"
            },
            profComplete: {
                firstItem: {
                    titleProf1: "",
                    percent1: "",
                },
                secondItem: {
                    titleProf2: "",
                    percent2: "",
                },
                thirdItem: {
                    titleProf3: "",
                    percent3: "",
                }
            }
        },
    ]
    return(
        <div className="column">
            {
                listWidgetsLeft.map((item, index) => {
                    return(
                        <div className="block-widget" key={index}>
                            <Widget
                                title={item.title}
                                extraClass={item.extraClass}
                                subTitle={item.subTitle}
                                image={item.img}
                                realTimeHours={item.realTime.hours}
                                realTimeDots={item.realTime.point}
                                realTimeMin={item.realTime.min}
                                date={item.date}
                                progressbar={item.progressBar}
                                bodyText={item.bodyText}
                                button={item.button.textButton}
                                profCompleteTitle1={item.profComplete.firstItem.titleProf1}
                                profCompletePercent1={item.profComplete.firstItem.percent1}
                                profCompleteTitle2={item.profComplete.secondItem.titleProf2}
                                profCompletePercent2={item.profComplete.secondItem.percent2}
                                profCompleteTitle3={item.profComplete.thirdItem.titleProf3}
                                profCompletePercent3={item.profComplete.thirdItem.percent3}
                                bgImg={item.bgImage}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Column;