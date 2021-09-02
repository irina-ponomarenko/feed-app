import React, {useState} from "react";
import Form from "../form/Form";
import store from "../../store/store";

const LoginForm = () => {
    let passwordRef = React.createRef();
    let emailRef = React.createRef();

    let [messageUser, setMessageUser] = useState();
    let [isUserExist, setIsUserExist] = useState();

    let handlerLoginSubmit = (event) => {
        event.preventDefault();

        let login = emailRef.current.value.trim();
        let password = passwordRef.current.value.trim();

        let userLogin = {
            login: login,
            password: password
        };

        fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userLogin),
        })
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setMessageUser(result.message);
                setIsUserExist(result);
                
                if(result){
                    let token = {
                        refreshToken: isUserExist.userData.refreshToken,
                        accessToken: isUserExist.userData.accessToken
                    };
                    localStorage.setItem('token', JSON.stringify(token));
                    store.dispatch({ type: 'token', payload: {token: token }});
                }
                else{
                    return messageUser;
                }
            });
    };

    return (
        <Form
            handlerSubmit={handlerLoginSubmit}
            text="Sign In"
            passwordRef={passwordRef}
            emailRef={emailRef}
            msg={messageUser}
        />
    )
};

export default LoginForm;