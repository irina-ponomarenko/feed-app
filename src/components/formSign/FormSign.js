import React from "react";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";

const FormSign = () => {
    let listInputs = [
        {
            type: "text",
            placeholder: "Enter your Login",
        },
        {
            type: "password",
            placeholder: "Enter your Password",
        },
    ];

    return (
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
            <Button
                type="submit"
                className="btn-blue-popup"
                text="Sign In"
            />
        </form>
    );
};

export default FormSign;