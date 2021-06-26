import React from "react";

const Title = (props) => {
    return (
        <h3 className={"block-title " + props.className}>
            {props.title}
        </h3>
    );
};

Title.defaultProps = {
    className: ""
}

export default Title;