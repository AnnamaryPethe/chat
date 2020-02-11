import React, {ChangeEvent, FormEvent} from 'react';
import axios from 'axios';
import { Form, Input } from 'antd';
import '../MainPage/Main.css';
import SuccessAlert from "../../Alert/SuccessAlert/SuccessAlert";
import ErrorAlert from "../../Alert/ErrorAlert/ErrorAlert";

import { jsx } from '@emotion/core'

export interface RegistrationState {
    firstName: string,
    lastName: string,
    nickname: string,
    email: string,
    password: string,
    alert_message: string
}

export class Register extends React.Component<{}, RegistrationState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            nickname: "",
            email: "",
            password: "",
            alert_message: ""
        }
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case 'firstName':
                this.setState({firstName: event.target.value});
                break;
            case 'lastName':
                this.setState({lastName: event.target.value});
                break;
            case 'nickname':
                this.setState({nickname: event.target.value});
                break;
            case 'email':
                this.setState({email: event.target.value});
                break;
            case 'password':
                this.setState({password: event.target.value});
                break;
        }
    };


    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('register');

        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nickname: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };
        console.log(data);

        axios.post(`http://localhost:8000/user/`, {data})
            .then(res => {
                this.setState({alert_message: "success"});
                console.log(res.data);
            })
            .catch(error => {
                this.setState({alert_message: "error"});
                console.log(error);
            })
    };


    render() {
        return(

          <div>
              <hr/>
              {this.state.alert_message==="success"?<SuccessAlert/>:null}
              {this.state.alert_message==="error"?<ErrorAlert/>:null}

              <form onSubmit={this.handleSubmit}>
                  <Form.Item label="First name: " className="form-size">
                      <Input type="text" placeholder="First name" name="firstName" value={this.state.firstName} onChange={this.handleChange} required={true}/>
                  </Form.Item>

                  <Form.Item label="Last name: " className="form-size">
                      <Input type="text" placeholder="First name" name="lastName" value={this.state.lastName} onChange={this.handleChange} required={true}/>
                  </Form.Item>

                  <Form.Item label="Nickname: " className="form-size">
                      <Input type="text" placeholder="Last name" name="nickname" value={this.state.nickname} onChange={this.handleChange} required={true}/>
                  </Form.Item>

                  <Form.Item label="E-mail:" className="form-size">
                      <Input type="email" placeholder="Email address" name="email" value={this.state.email} onChange={this.handleChange} required={true}/>
                  </Form.Item>

                  <Form.Item label="Password:" className="form-size">
                      <Input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required={true}/>
                  </Form.Item>

                  <button type="submit" >Registration</button>
              </form>
          </div>

        )
    }

}
