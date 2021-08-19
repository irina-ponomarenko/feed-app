import React, {useState} from "react";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import store from "../../store/store";

import "./form.css";

const FormSign = (props) => {
    let passwordRef = React.createRef();
    let nameRef = React.createRef();
    let emailRef = React.createRef();

    let [msg, setMessage] = useState();

    let handlerFormSubmit = (event) => {
        event.preventDefault();

        let login = emailRef.current.value.trim();
        let password = passwordRef.current.value.trim();
        let name = nameRef.current.value.trim();

        if(login === "admin" && password === "12345"){
            let random = Math.random().toString(36).substring(7);
            let token = random;
            localStorage.setItem('token', token);
            store.dispatch({ type: 'token', payload: {token: token }});
        }
        else{
            console.log("Your login or password is wrong");
        }

        let createUser = {
            name: name,
            login: login,
            password: password
        };

        fetch('api/registration', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(createUser),
        })
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setMessage(result.message);
            });
    };
    console.log(msg);

    let listInputs = [
        {
            type: "text",
            placeholder: "Enter your Name",
            extraClass: "name-user",
            refInput: nameRef
        },
        {
            type: "email",
            placeholder: "Enter your Email",
            extraClass: "email-user",
            refInput: emailRef
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
            <p className="warn-message">
                {
                    msg
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

export default FormSign;