import React from 'react';
import {Register} from "../Register/Register";
import {Tabs, Card,} from 'antd';
import {Login} from "../Log_in/Log_in";
import {Layout} from 'antd';

import './Main.css'
import video from "../../../video/background3.mp4";

import styled from '@emotion/styled'

let StyleH3 = styled.h3({
    color: '#fff',
    fontSize: '35px',
});

const Video = styled.video({
    position: 'fixed',
    right: '0',
    bottom: '0',
    minWidth: '100%',
    minHeight: '100%'
});


const {TabPane} = Tabs;



class Main_page extends React.Component<{}, {}> {

    render() {
        const {Content} = Layout;
        return (
            <div>
                <Layout className="layout">
                    <Content>
                        <div>
                            <div className="vid-container">
                                <Video className="background-video" loop autoPlay>
                                    <source src={video} type="video/mp4"/>
                                </Video>
                                <div className="page">
                                    <div className="card-container">
                                        <Card
                                         title="LET'S CHAT!">
                                            <StyleH3
                                            >Join us! Log in or sign in to chat!</StyleH3>
                                            <Tabs type="card">
                                                <TabPane tab="LogIn" key="1">
                                                    <Login/>
                                                </TabPane>
                                                <TabPane tab="Registration" key="2">
                                                    <Register />
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