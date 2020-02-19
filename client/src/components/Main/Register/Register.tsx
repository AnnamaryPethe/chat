import React, {FormEvent, useContext, useReducer, useState} from 'react';
import axios from 'axios';
import {Form, Input} from 'antd';
import '../MainPage/Main.css';
import SuccessAlert from "../../Alert/SuccessAlert/SuccessAlert";
import ErrorAlert from "../../Alert/ErrorAlert/ErrorAlert";
import {reducer, initialState, Action, UserState} from "../../../reducer/reducer";
import {Button} from "../Log_in/login.style";

export const Register: React.FC = () => {

    const [alertMessage, setAlertMessage] = useState<string>('');
    const [user, dispatch] = useReducer<(state: UserState, action: Action) => UserState>(reducer, initialState);


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('register');

        console.log("usereducer uses: " + user);

        axios.post(`http://localhost:8000/user/`, {data: user})
            .then(res => {
                setAlertMessage("success");
                console.log(res.data);
            })
            .catch(error => {
                setAlertMessage("error");
                console.log(error);
            })
    };

    return (
        <div>
            <hr/>
            {alertMessage === "success" ? <SuccessAlert/> : null}
            {alertMessage === "error" ? <ErrorAlert/> : null}
                <form onSubmit={handleSubmit}>
                    <Form.Item label="First name: " className="form-size">
                        <Input type="text" placeholder="First name" name="firstName" value={user.firstName}
                               onChange={e => {
                                   dispatch({type: 'firstName', payload: e.target.value})
                               }} required={true}/>
                    </Form.Item>

                    <Form.Item label="Last name: " className="form-size">
                        <Input type="text" placeholder="First name" name="lastName" value={user.lastName}
                               onChange={e => {
                                   dispatch({type: 'lastName', payload: e.target.value})
                               }} required={true}/>
                    </Form.Item>

                    <Form.Item label="Nickname: " className="form-size">
                        <Input type="text" placeholder="Last name" name="nickname" value={user.nickname}
                               onChange={e => {
                                   dispatch({type: 'nickname', payload: e.target.value})
                               }} required={true}/>
                    </Form.Item>

                    <Form.Item label="E-mail:" className="form-size">
                        <Input type="email" placeholder="Email address" name="email" value={user.email} onChange={e => {
                            dispatch({type: 'email', payload: e.target.value})
                        }} required={true}/>
                    </Form.Item>

                    <Form.Item label="Password:" className="form-size">
                        <Input type="password" placeholder="Password" name="password" value={user.password}
                               onChange={e => {
                                   dispatch({type: 'password', payload: e.target.value})
                               }} required={true}/>
                    </Form.Item>

                    <Button type="submit">Registration</Button>
                </form>
        </div>

    )


};
