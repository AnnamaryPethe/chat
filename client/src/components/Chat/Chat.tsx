import * as React from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import video from "../../video/background2.mp4"
import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import InputBox from "../Message_input/Message_input";
import UsersContainer from "../Users_container/Users_container";
import {IMessage} from "../Message/Message";
import {Video, Container, OuterContainer} from './chat-style'
import {useContext} from "react";
import UserContext, {User} from "../../context/UserContext";


interface Props {
    location: any
}


let socket: SocketIOClient.Socket;

const Chat: React.FC<Props> = ({location}) => {
    const [name, setName] = React.useState<string>('');
    const [room, setRoom] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');
    const [messages, setMessages] = React.useState<IMessage[]>([]);
    const [names, setNames] = React.useState<string[]>([]);
    const ENDPOINT = 'localhost:8000';
    const context = useContext<Partial<User | undefined>>(UserContext);

    React.useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        socket= io(ENDPOINT);

        setName(name as string);
        setRoom(room as string);

        socket.emit('join', { name, room }, () => {

        });
    }, [ENDPOINT, location.search]);

    React.useEffect(() => {
        socket.on('message', (message: IMessage) => {
            setMessages([...messages, message ]);
        });

        socket.on('userArray', (names: string[]) => {
            setNames(names);
        });

        return () => {
            socket.emit('disconnect', {name, room}, () => {

            });
        }
    }, [messages]);


    const sendMessage = (event: any) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return(
        <div data-vide-bg="background2">
            <div className="vid-container">
                <h3>Let's go to chat {context?.data?.user.nickname}</h3>
                <Video className="background-video" loop autoPlay >
                    <source src={video} type="video/mp4" />
                </Video>
                <OuterContainer>
                    <Container>
                        <InfoBar room={room}/>
                        <Messages messages={messages} name={name}/>
                        <InputBox message={message as string} setMessage={setMessage} sendMessage={sendMessage}/>
                    </Container>
                    <UsersContainer users={names as string[]}/>
                </OuterContainer>
                <script src="https://code.jquery.com/jquery-3.4.1.js"/>
                <script src="vide/jquery.vide.min.js"/>
            </div>
        </div>
    )
};

export default Chat;