import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import "./popup.css";

const Popup = (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);

    // const handleClick = () => {
    //     let input = document.querySelector(".input-change").value.trim();
    //     props.updateData(input);
    // }


    return ReactDOM.createPortal(
        <div className={"popup " + (isOpen  ? "is-visible " : "" ) + props.extraClass}>
            <div className="header-popup">
                <h3>
                    {props.title}
                </h3>
                <span className="popup-closed" onClick={props.closeModal}/>
            </div>
            <div className="body-popup">
                {props.children}
            </div>
            {/*<input type="text" className="input-change"/>*/}
            {/*<button onClick={handleClick}>update</button>*/}
        </div>,
        document.getElementById("portal")
    );
};

Popup.defaultProps = {
    extraClass: "",
};

export default Popup;