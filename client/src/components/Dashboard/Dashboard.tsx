import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Dashboard.css"
// import video from '../../assets/background.mp4'
import io from 'socket.io-client';
import Rooms from "../Rooms/Rooms";


let socket: SocketIOClient.Socket;

const Dashboard: React.FC = () => {
    const [name, setName] = useState<string>(" ");
    const [room, setRoom] = useState<string>(" ");
    const [rooms, setRooms] = useState<string[]>([]);
    const SERVER_PORT: string= "localhost:8000";

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
        <div data-vide-bg="background">
            <div className="vid-container">
                {/*<video id="background-video" loop autoPlay>*/}
                {/*    <source src={video} type="video/mp4"/>*/}
                {/*</video>*/}
                <div className="joinContainer">
                    <h1>Come and join us to chat!!</h1>
                    <div className="joinInput">
                        <input placeholder="Nickname" type="text"
                               onChange={event => setName(event.target.value)}/>
                        <div className="joinInput">
                            <input placeholder="room name" type="text"
                                   onChange={event => setRoom(event.target.value)}/>
                        </div>
                        <div className="joinInput">
                            <Link onClick={handleJoin} to={""}>
                                <button type="submit">Join</button>
                            </Link>
                        </div>
                        <Rooms rooms={rooms}/>
                    </div>
                    < script src="https://code.jquery.com/jquery-3.4.1.js"/>
                    <script src="../../jquery.vide.js"/>
                </div>
            </div>
        </div>
    )

};

export default Dashboard;