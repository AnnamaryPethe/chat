import React, { FormEvent, useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {Alert} from "antd";

export const Log_in: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);


    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let data = {
            email: email,
            password: password
        };
        axios.post(`http://localhost:8000/user/login`, {data})
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
                setError(true);
            })
    };

    const loginHandler = () => {
        if (error) {
            return <div>
                <Alert
                    message="Error"
                    description="Failed registration"
                    type="error"
                />
            </div>
        }
    };


    return(
        <div>
            <h3>LogIn</h3>
            <form onSubmit={submitHandler}>
            <div>
                <div>E-mail:</div>
                <input type="email" placeholder="Email address" onChange={event => setEmail(event.target.value)}/>
                <div>Password: </div>
                <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                <div>
                    <Link onClick={loginHandler} to={"/dashboard"}>
                        <button type="submit">Join</button>
                    </Link>
                </div>
            </div>
            </form>
        </div>
    )
};