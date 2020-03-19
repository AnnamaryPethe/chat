import React, {FormEvent, useState} from 'react';
import { Redirect} from "react-router-dom";
import {Button, Form, Icon, Input} from "antd";
import '../MainPage/Main.css'
import gql from "graphql-tag";
import { useMutation} from "@apollo/react-hooks";
import { FormComponentProps } from "antd/lib/form";

type LoginFormProps = FormComponentProps;

type UserLogin = {
    email: string,
    password: string
}

interface LoginData {
    id?: string
    success?: boolean
}

const LOGIN_USER = gql`
    mutation loginUser($data: LoginInput!) {
        loginUser(data: $data) {
            id
            success
        }
    }
`;

export const Log_in: React.FC<LoginFormProps> = (props: LoginFormProps): JSX.Element => {
    const [redirect, setRedirect] = useState<boolean | undefined>(false);
    const [id, setId] = useState<string | undefined>('');

    const [loginUser] = useMutation<{loginUser: LoginData}, {data: UserLogin}>(LOGIN_USER);

    const loginHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(getFieldDecorator);
        const {form} = props;
        try {
            form.validateFields(async (err, values: UserLogin) => {
                if (err) {
                    console.log(err);
                }
                const res = await loginUser(
                    {variables: {data: {email: values.email, password: values.password}}});
                const {id, success} = res.data?.loginUser as LoginData;
                setId(id);
                setRedirect(success);
                if (!success) {
                    alert("this email or password is not correct");
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const { form } = props;
    const { getFieldDecorator } = form;
    return (
        <>
            {redirect ? <Redirect to={`/dashboard/${id}`}/> : null}
            <div>
                <Form onSubmit={loginHandler} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input
                                prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"> Join </Button>
                </Form>
            </div>
        </>
    )
};

export const Login = Form.create()(Log_in);
