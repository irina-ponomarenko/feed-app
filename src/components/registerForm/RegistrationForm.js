import React, {useState} from "react";
import Form from "../form/Form";
import store from "../../store/store";

const RegisterForm = () => {
    let passwordRef = React.createRef();
    let nameRef = React.createRef();
    let emailRef = React.createRef();

    let [msg, setMessage] = useState();

    let handlerRegisterSubmit = (event) => {
        event.preventDefault();

        let login = emailRef.current.value.trim();
        let password = passwordRef.current.value.trim();
        let name = nameRef.current.value.trim();

        let createUser = {
            name: name,
            login: login,
            password: password
        };

        fetch('api/registration', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
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

    return (
        <Form
            handlerSubmit={handlerRegisterSubmit}
            text="Registration"
            passwordRef={passwordRef}
            nameRef={nameRef}
            emailRef={emailRef}
            msg={msg}
        />
    );
};

export default RegisterForm;