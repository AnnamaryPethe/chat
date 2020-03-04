import React, {FormEvent, useEffect, useRef, useState} from 'react';
import { Redirect} from "react-router-dom";
import {Form, Input} from "antd";
import '../MainPage/Main.css'
import {Button} from "./login.style";
import gql from "graphql-tag";
import { useMutation} from "@apollo/react-hooks";

interface UserLogin {
    email: string,
    password: string
}

interface LoginData {
    id?: string
    success: boolean
}

const LOGIN_USER = gql`
    mutation loginUser($data: LoginInput!) {
        loginUser(data: $data) {
            id
            success
        }
    }
`;

export const Log_in: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [redirect, setRedirect] = useState<boolean | undefined>(false);
    const [id, setId] = useState<string | undefined>('');

    const [loginUser] = useMutation<{loginUser: LoginData}, {data: UserLogin}>(LOGIN_USER);

    const loginHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        loginUser(
            {variables: {data: {email, password}}}
        ).then(res => {
            console.log(res);
            setId(res.data?.loginUser.id);
            setRedirect(res.data?.loginUser.success);
            if (res.data?.loginUser.success === false) {
                alert("this email or password is not correct")
            }
        }).catch(err => {
            console.log(err);
        });

    };

    return (
        <>
            {redirect ? <Redirect to={`/dashboard/${id}`}/> : null}
            <div>
                <form onSubmit={loginHandler}>
                    <div>
                        <Form.Item label="E-mail: " className="form-size">
                            <Input type="email" placeholder="Email address"
                                   onChange={event => setEmail(event.target.value)} required={true}/>
                        </Form.Item>
                        <Form.Item label="Password: " className="form-size">
                            <Input type="password" placeholder="Password"
                                   onChange={event => setPassword(event.target.value)} required={true}/>
                        </Form.Item>
                        <Button type="submit"> Join </Button>
                    </div>
                </form>
            </div>
        </>
    )
};
