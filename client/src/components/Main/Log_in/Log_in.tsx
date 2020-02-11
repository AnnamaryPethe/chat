import React, { FormEvent, useState} from 'react';
import { Redirect} from "react-router-dom";
import axios from 'axios';
import {Form, Input} from "antd";
import '../MainPage/Main.css'

export const Log_in: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [redirect, setRedirect] = useState<boolean>(false);


    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let data = {
            email: email,
            password: password
        };
        console.log(data);
        await axios.post(`http://localhost:8000/user/login`, {data})
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.success);
                    setRedirect(res.data.success);
                }
            })
            .catch(error => {
                console.log(error);
            })
    };


    return(
       <>
        {redirect ? <Redirect to={'/dashboard'}/>: null}
        <div>
            <form onSubmit={submitHandler}>
            <div>
                <Form.Item label="E-mail: " className="form-size">
                    <Input type="email" placeholder="Email address" onChange={event => setEmail(event.target.value)} required={true}/>
                </Form.Item>
                <Form.Item label="Password: " className="form-size">
                    <Input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} required={true}/>
                </Form.Item>
               <button type="submit">  Join  </button>
            </div>
            </form>
        </div>
       </>
    )
};