import React, {useState, useEffect} from "react";

import "./popup.css";
import Input from "../input/Input";
import BlueButton from "../blueButton/BlueButton";

const Popup = (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);

    useEffect(() => {
        setIsOpen(props.isOpen);

    }, [props.isOpen]);


    let listInputs = [
        {
            type: "text",
            placeholder: "Enter your Login",
        },
        {
            type: "password",
            placeholder: "Enter your Password",
        },
    ]
    return(
       <div className={'popup ' + (isOpen ? 'is-visible' : '')}>
           <div className="header-popup">
               <h3>
                   Sign In
               </h3>
               <span className="popup-closed" onClick={props.closeModal}></span>
           </div>
           <div className="body-popup">
               <form className="form-popup">
                   <ul className="list-input">
                       {
                           listInputs.map((item, index) => {
                               return(
                                   <li key={index}>
                                       <Input
                                           type={item.type}
                                           placeholder={item.placeholder}
                                       />
                                   </li>
                               )
                           })
                       }
                   </ul>
                   <BlueButton/>
               </form>
           </div>

       </div>
    )
};

export default Popup;