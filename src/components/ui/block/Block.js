import React from "react";

import "./block.css";

const Block = React.forwardRef((props, ref) => {
    return (
        <div className={"block " + props.extraClass} ref={ref}>
            {props.children}
        </div>
    );
});

Block.defaultProps = {
    extraClass: "",
};

export default Block;