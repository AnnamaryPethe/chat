import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import backgroundVideo from '../../video/background.mp4'
import io from 'socket.io-client';
import Rooms from "../Rooms/Rooms";
import {JoinContainer, Video, Input, Button, DivBody, JoinContainerH1, JoinInput} from './dashboard'
import axios from 'axios';
import UserContext, {User} from "../../context/UserContext";
import {Navbar} from "../Navbar/Navbar";

let socket: SocketIOClient.Socket;


const Dashboard: React.FC<User> = () => {
    const [name, setName] = useState<string>(" ");
    const [room, setRoom] = useState<string>(" ");
    const [rooms, setRooms] = useState<string[]>([]);
    const SERVER_PORT: string = "localhost:8000";
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const {id} = useParams();


    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8000/user/${id}`,)
            .then(res => {
                console.log(res.data);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setNickname(res.data.nickname);
            });

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
        <div >
            <UserContext.Provider value={{firstName, lastName, nickname}}>
                <Navbar/>
            </UserContext.Provider>

            <DivBody>
                <div>
                    <div data-vide-bg="background">
                        <div className="vid-container">
                            <Video className="background-video" loop autoPlay>
                                <source src={backgroundVideo} type="video/mp4"/>
                            </Video>
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
        </div>

    )

};

export default Dashboard;