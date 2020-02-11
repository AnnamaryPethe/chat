import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import video from '../../video/background.mp4'
import io from 'socket.io-client';
import Rooms from "../Rooms/Rooms";
import styled from "@emotion/styled";


const DivBody = styled.div({
    fontFamily: 'sans-serif',
    padding: '0',
    margin: '0',
    width: '100%',
    height: '100vh',
    background: '#f9f9f9'
});

const JoinContainer = styled.div({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    padding: '60px 40px',
    // background: rgb(146, 146, 201);
    boxShadow: '0 15px 20px rgba(255, 255, 255, 0.59)',
});

const JoinContainerH1 = styled.h1({
    margin: '0 0 40px',
    padding: '0',
    textAlign: 'center',
    color: 'white'
});

const JoinInput = styled.div({
    position: 'relative',
    margin: '20px 0',

});

const Input = styled.input({
    color: 'white',
    outline: 'none',
    height: '40px',
    padding: '10px',
    boxSizing: 'border-box',
    width: '100%',
    border: '1px solid rgb(249, 249, 255)',
    background: 'transparent',
    fontSize: '18px'
});

const Button = styled.button({
    background: '#e91e63',
    height: '40px',
    padding: '10px',
    boxSizing: 'border-box',
    width: '100%',
    border: '1px solid rgb(255, 255, 255)',
    color: 'rgb(255, 255, 255)',
    cursor: 'pointer',
    textTransform: 'uppercase',
    submitHover: {
        background: '#2979FF'
}
});


let socket: SocketIOClient.Socket;


const Dashboard: React.FC = () => {
    const [name, setName] = useState<string>(" ");
    const [room, setRoom] = useState<string>(" ");
    const [rooms, setRooms] = useState<string[]>([]);
    const SERVER_PORT: string = "localhost:8000";

    useEffect(() => {
        socket = io(SERVER_PORT);

        socket.emit('rooms', {room});
        socket.on('roomArray', function (rooms: string[]) {
            setRooms(rooms);
        })
    }, [SERVER_PORT]);

    const handleJoin = function (event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();

        socket.emit('checkName', {name, room}, (error: any) => {
            if (error?.error) {
                alert(error.error);
                return;
            }
            window.location.replace(`/chat?name=${name}&room=${room}`);
        });
    };

    return (
        <DivBody>
            <div>
                <div data-vide-bg="background">
                    <div className="vid-container">
                        <video id="background-video" loop autoPlay>
                            <source src={video} type="video/mp4"/>
                        </video>
                        <JoinContainer className="joinContainer">
                            <JoinContainerH1>Come and join us to chat!!</JoinContainerH1>
                            <JoinInput className="joinInput">
                                <Input placeholder="Nickname" type="text"
                                       onChange={event => setName(event.target.value)}/>
                                <JoinInput className="joinInput">
                                    <Input placeholder="room name" type="text"
                                           onChange={event => setRoom(event.target.value)}/>
                                </JoinInput>
                                <JoinInput className="joinInput">
                                    <Link onClick={handleJoin} to={""}>
                                        <Button type="submit">Join</Button>
                                    </Link>
                                </JoinInput>
                                <Rooms rooms={rooms}/>
                            </JoinInput>
                            <script src="https://code.jquery.com/jquery-3.4.1.js"/>
                            <script src="vide/jquery.vide.min.js"/>
                        </JoinContainer>
                    </div>
                </div>
            </div>
        </DivBody>

    )

};

export default Dashboard;