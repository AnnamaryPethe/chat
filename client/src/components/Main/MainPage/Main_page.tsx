import React from 'react';
import {Register, RegistrationState} from "../Register/Register";
import {Tabs, Card,} from 'antd';
import {Log_in} from "../Log_in/Log_in";
import {Layout} from 'antd';

import './Main.css'
import video from "../../../video/background3.mp4";

import styled from '@emotion/styled'

let StyleH3 = styled.h3({
    color: '#fff',
    fontSize: '35px',
});


const {TabPane} = Tabs;

class Main_page extends React.Component<RegistrationState, {}> {

    render() {
        const {Content} = Layout;
        return (
            <div>
                <Layout className="layout">
                    <Content css={{ padding: 10 }}>
                        <div style={{padding: 24, minHeight: 30}}>
                            <div className="vid-container">
                                <video id="background-video" loop autoPlay>
                                    <source src={video} type="video/mp4"/>
                                </video>
                                <div className="page">
                                    <div className="card-container">
                                        <Card
                                            style={{
                                            width: '80%',
                                            paddingLeft: '10px',
                                            textAlign: 'center',
                                            fontSize: '20px',
                                            margin: '150px',
                                            padding: '30px',
                                            backgroundImage: '#5529ff',
                                        }} title="LET'S CHAT!"
                                              bodyStyle={{
                                                  background: '#5a4083'
                                              }
                                              }>
                                            <StyleH3
                                                style={{
                                                    color: '#fff',
                                                    fontSize: '35px',
                                                }
                                                }
                                            >Join us! Log in or sign up to chat!</StyleH3>
                                            <Tabs type="card">
                                                <TabPane tab="LogIn" key="1">
                                                    <Log_in/>
                                                </TabPane>
                                                <TabPane tab="Registration" key="2">
                                                    <Register/>
                                                </TabPane>
                                            </Tabs>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>

        )
    }
}

export default Main_page;