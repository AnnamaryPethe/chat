import React, {ChangeEvent, FormEvent} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Alert} from 'antd';

export interface RegistrationState {
    firstName: string,
    lastName: string,
    nickname: string,
    email: string,
    password: string,
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
                console.log(res.data);
                this.handleRegister(true);
            })
            .catch(error => {
                console.log(error);
                this.handleRegister(false);
            })
    };


    handleRegister = (isSuccess: boolean) => {
        console.log('hdas');
        if (isSuccess) {
            return <div>
                <Alert
                    message="Success"
                    description="Your registration is successfully done."
                    type="success"
                />
            </div>
        }
        else {
            return <div>
                <Alert
                    message="Error"
                    description="Failed registration"
                    type="error"
                />
            </div>
        }
    };

    render() {
        return(
          <div>
              <h3>Register</h3>
              <form onSubmit={this.handleSubmit}>
                  <div>First name: </div>
                  <input type="text" placeholder="First name" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                  <div>Last name: </div>
                  <input type="text" placeholder="Last name" name="lastName" value={this.state.lastName } onChange={this.handleChange}/>
                  <div>Nickname: </div>
                  <input type="text" placeholder="Nickname" name="nickname" value={this.state.nickname} onChange={this.handleChange}/>
                  <div>E-mail: </div>
                  <input type="email" placeholder="Email address" name="email" value={this.state.email} onChange={this.handleChange}/>
                  <div>Password: </div>
                  <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  <button type="submit">Registration</button>
              </form>
          </div>

        )
    }

}
