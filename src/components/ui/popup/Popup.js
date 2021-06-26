import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import "./popup.css";

const Popup = (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen]);


    return ReactDOM.createPortal(
        <div className={"popup " + (isOpen ? "is-visible" : "")}>
            <div className="header-popup">
                <h3>
                    {props.title}
                </h3>
                <span className="popup-closed" onClick={props.closeModal}/>
            </div>
            <div className="body-popup">
                {props.children}
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default Popup;