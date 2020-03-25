import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import backgroundVideo from '../../video/background.mp4'
import io from 'socket.io-client';
import Rooms from "../Rooms/Rooms";
import {JoinContainer, Video, Input, Button, DivBody, JoinContainerH1, JoinInput} from './dashboard-style'
import {User} from '../../context/UserContext';
import {ProfileButton} from "../ProfileButton/ProfileButton";
import {Logout} from "../Logout/Logout";


let socket: SocketIOClient.Socket;


const Dashboard: React.FC<User> = () => {
    const [name, setName] = useState<string>(" ");
    const [room, setRoom] = useState<string>(" ");
    const [rooms, setRooms] = useState<string[]>([]);
    const SERVER_PORT: string = "localhost:8000";
    const {id} = useParams();
    const history = useHistory();


    useEffect(() => {
        socket = io(SERVER_PORT);

        socket.emit('rooms', {room});
        socket.on('roomArray', (rooms: string[]) => {
            setRooms(rooms);
        })
    }, [SERVER_PORT]);

    const handleJoin = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        socket.emit('checkName', {name, room}, (error: any) => {
            if (error?.error) {
                alert(error.error);
                return;
            }
            // window.location.replace(`/chat/${id}?name=${name}&room=${room}`);
            history.push(`/chat/${id}?name=${name}&room=${room}`)
        });
    };


    return (
        <div>
            <Logout/>
            <ProfileButton/>
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
                                </JoinInput>
                                <script src="https://code.jquery.com/jquery-3.4.1.js"/>
                                <script src="vide/jquery.vide.min.js"/>
                            </JoinContainer>
                            <Rooms rooms={rooms}/>
                        </div>
                    </div>
                </div>
            </DivBody>
        </div>

    )

};

export default Dashboard;