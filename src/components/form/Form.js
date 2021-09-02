import React from "react";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";

import "./form.css";

const Form = (props) => {

    let listInputs = [
        {
            type: "text",
            placeholder: "Enter your Name",
            extraClass: "name-user",
            refInput: props.nameRef
        },
        {
            type: "email",
            placeholder: "Enter your Email",
            extraClass: "email-user",
            refInput: props.emailRef
        },
        {
            type: "password",
            placeholder: "Enter your Password",
            extraClass: "password-user",
            refInput: props.passwordRef
        },
    ];

    return (
        <form className="form-popup" onSubmit={props.handlerSubmit}>
            <ul className="list-input">
                {
                    listInputs.map((item, index) => {
                        return(
                            <li key={index}>
                                <Input
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    extraClass={item.extraClass}
                                    ref={item.refInput}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <p className="warn-message">
                {
                    props.msg
                }
            </p>
            <Button
                type="submit"
                className="btn-blue-popup"
                text={props.text}
            />
        </form>
    );
};

export default Form;