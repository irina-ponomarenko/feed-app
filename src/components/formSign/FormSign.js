import React, {useState} from "react";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";

const FormSign = () => {
    let userRef = React.createRef();
    let passwordRef = React.createRef();

    let handlerFormSubmit = (event) => {
        // event.preventDefault();

        let userName = userRef.current.value.trim();
        let passwordUser = passwordRef.current.value.trim();

        if(userName === "admin" && passwordUser === "12345"){
            let random = Math.random().toString(36).substring(7);
            let token = random;
            localStorage.setItem('token', token);
        }
        else{
            console.log("Your login or password is wrong");
        }
    };

    let listInputs = [
        {
            type: "text",
            placeholder: "Enter your Login",
            extraClass: "user-name",
            refInput: userRef
        },
        {
            type: "password",
            placeholder: "Enter your Password",
            extraClass: "password-user",
            refInput: passwordRef
        },
    ];

    return (
        <form className="form-popup" onSubmit={handlerFormSubmit}>
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
            <Button
                type="submit"
                className="btn-blue-popup"
                text="Sign In"
            />
        </form>
    );
};

export default FormSign;