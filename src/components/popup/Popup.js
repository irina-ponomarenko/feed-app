import React from "react";

import "./popup.css";
import Input from "../input/Input";
import BlueButton from "../blueButton/BlueButton";

const Popup = () => {
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
       <div className="popup">
           <div className="header-popup">
               <h3>
                   Sign In
               </h3>
               <span className="popup-closed"></span>
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