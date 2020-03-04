import React, {FormEvent, useState} from 'react';

import {Form, Input} from 'antd';
import '../MainPage/Main.css';
import SuccessAlert from "../../Alert/SuccessAlert/SuccessAlert";
import ErrorAlert from "../../Alert/ErrorAlert/ErrorAlert";
import {Button} from "../Log_in/login.style";
import gql from "graphql-tag";

import {useMutation} from "react-apollo-hooks";

interface User {
    id?: string
    firstName: string,
    lastName: string,
    nickname: string,
    email: string,
    password: string
}

interface Response {
    message: string,
    success: boolean
}

const POST_NEW_USER_MUTATION = gql`
    mutation createUser($data: CreateUserInput!) {
        createUser(data: $data) {
            message
            success
        }
   }
`;

export const Register: React.FC = () => {

    const [isSuccess, setSuccess] = useState<boolean | undefined>();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUser] = useMutation<{ createUser: Response }, { data: User }>(POST_NEW_USER_MUTATION);

    const clearState = () => {
        setFirstName("");
        setLastName("");
        setNickname("");
        setEmail("");
        setPassword("");
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createUser({
            variables: {
                data: {
                    firstName,
                    lastName,
                    nickname,
                    email,
                    password
                }
            }
        }).then(res => {
            clearState();
            console.log(res.data?.createUser.success);
            setSuccess(res.data?.createUser.success)
        })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div>
            <hr/>
            {isSuccess === true ? <SuccessAlert/> : null}
            {isSuccess === false ? <ErrorAlert/> : null}
            <form onSubmit={handleSubmit}>
                <Form.Item label="First name: " className="form-size">
                    <Input type="text" placeholder="First name" name="firstName" value={firstName}
                           onChange={e => {
                               setFirstName(e.target.value)
                           }}
                           required={true}
                    />
                </Form.Item>

                <Form.Item label="Last name: " className="form-size">
                    <Input type="text" placeholder="First name" name="lastName" value={lastName}
                           onChange={e => setLastName(e.target.value)}
                           required={true}/>
                </Form.Item>

                <Form.Item label="Nickname: " className="form-size">
                    <Input type="text" placeholder="Last name" name="nickname" value={nickname}
                           onChange={e => {
                               setNickname(e.target.value)
                           }}
                           required={true}/>
                </Form.Item>

                <Form.Item label="E-mail:" className="form-size">
                    <Input type="email" placeholder="Email address" name="email" value={email} onChange={e => {
                        setEmail(e.target.value)
                    }}
                           required={true}/>
                </Form.Item>

                <Form.Item label="Password:" className="form-size">
                    <Input type="password" placeholder="Password" name="password" value={password}
                           onChange={e => {
                               setPassword(e.target.value)
                           }}
                           required={true}/>
                </Form.Item>
                <Button type="submit">Registration</Button>
            </form>
        </div>

    )


};
