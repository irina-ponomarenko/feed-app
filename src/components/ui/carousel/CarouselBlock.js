import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const CarouselBlock = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: 3000,
    };

    return (
        <div className={props.extraClass}>
            <Slider {...settings}>
                {props.children}
            </Slider>
        </div>
    );
};

CarouselBlock.defaultProps = {
    extraClass: "",
};

export default CarouselBlock;
