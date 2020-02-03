import React from 'react';
import {Register, RegistrationState} from "../Register/Register";
import {Tabs, Card} from 'antd';
import {Log_in} from "../Log_in/Log_in";
import './Main.css'

const {TabPane} = Tabs;

class Main_page extends React.Component<RegistrationState, {}> {

    render() {
        return (
            <div className="card-container">
                <div className="log-box">
                    <Card style={{
                        width: '50%',
                        paddingLeft: '100px'
                    }}
                          title="Join us! Log in or sign up to chat!">
                        <Tabs type="card">
                            <TabPane tab="LogIn" key="1">
                                <Log_in/>
                            </TabPane>
                            <TabPane tab="Registration" key="2">
                                <Register />
                            </TabPane>
                        </Tabs>
                    </Card>
                </div>
            </div>

        )
    }
}

export default Main_page;