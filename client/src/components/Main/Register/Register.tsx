import React, {FormEvent, useState} from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Checkbox,
    Button,
} from 'antd';
import '../MainPage/Main.css';
import SuccessAlert from "../../Alert/SuccessAlert/SuccessAlert";
import ErrorAlert from "../../Alert/ErrorAlert/ErrorAlert";
import gql from "graphql-tag";
import {useMutation} from "react-apollo-hooks";

import {FormComponentProps} from "antd/lib/form";

type LoginFormProps = FormComponentProps;

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

export const Register_: React.FC<LoginFormProps> = (props: LoginFormProps): JSX.Element => {

    const [isSuccess, setSuccess] = useState<boolean | undefined>();
    const [confirmDirty, setConfirm] = useState(false);
    const [createUser] = useMutation<{ createUser: Response }, { data: User }>(POST_NEW_USER_MUTATION);

    const compareToFirstPassword = (rule: any, value: any, callback: any) => {
        const {form} = props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule: any, value: any, callback: any) => {
        const {form} = props;
        if (value && confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    const handleConfirmBlur = (e: any) => {
        const {value} = e.target;
        setConfirm(confirmDirty || !!value);
    };

    const clear = () => {
        form.resetFields();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {form} = props;
        try {
            form.validateFieldsAndScroll(async (err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
                const res = await createUser({
                    variables: {
                        data: {
                            firstName: values.firstName,
                            lastName: values.lastName,
                            nickname: values.nickname,
                            email: values.email,
                            password: values.password
                        }
                    }
                });
                const {success} = res.data?.createUser as Response;
                setSuccess(success);
                clear();
            })
        } catch (err) {
            console.log(err);
        }
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const {form} = props;
    const {getFieldDecorator} = form;
    return (
        <div>
            <hr/>
            {isSuccess === true ? <SuccessAlert/> : null}
            {isSuccess === false ? <ErrorAlert/> : null}
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item label="firstName">
                    {getFieldDecorator('firstName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your first name!',
                            },
                        ],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="lastName">
                    {getFieldDecorator('lastName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your last name!',
                            },
                        ],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                validator: validateToNextPassword,
                            },
                        ],
                    })(<Input.Password/>)}
                </Form.Item>
                <Form.Item label="Confirm Password" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            {
                                validator: compareToFirstPassword,
                            },
                        ],
                    })(<Input.Password onBlur={handleConfirmBlur}/>)}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
                    }
                >
                    {getFieldDecorator('nickname', {
                        rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>

        </div>

    )
};

export const Register = Form.create()(Register_);
