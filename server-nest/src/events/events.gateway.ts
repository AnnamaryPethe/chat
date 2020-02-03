import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket} from 'socket.io';
import {NameRoomDto } from './dto/name-room-dto'
import {UsersService} from "./users.service";
import {ErrorResponse, User} from "./interfaces/events.interfaces";

@WebSocketGateway()
export class EventsGateway {
    constructor(private readonly usersService: UsersService) {}

    @WebSocketServer()
    server: Server;

    @SubscribeMessage('checkName')
    checkName(@MessageBody() data: NameRoomDto): string | ErrorResponse {
        if (!this.usersService.isValidName(data)) {
            return { error: "Username is taken. Please choose other name." }
        }
        return '';
    }

    @SubscribeMessage('join')
    onJoin(@MessageBody() data: NameRoomDto,
           @ConnectedSocket()client: Socket) {
        const user: User = {
            id: client.id,
            name: data.name,
            room: data.room
        };

        this.usersService.add(user);

        client.join(user.room);

        const usersArray= this.usersService.getAllUsersInRoom(user.room);

        client.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
        client.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined`});
        this.server.to(user.room).emit('roomData', {room: user.room, users: this.usersService.getUserInRoom(user.room)});
        client.emit('userArray', Array.from(usersArray));
    }

    @SubscribeMessage('rooms')
    onRooms(@ConnectedSocket() client: Socket) {
        const roomArray = this.usersService.getAllRooms();

        client.emit('roomArray',  Array.from(roomArray));
    }

    @SubscribeMessage('sendMessage')
    onSendMessage(@MessageBody() data: string,
                  @ConnectedSocket() client: Socket): string {
        // console.log(data);
        const user = this.usersService.getUser(client.id);
        // console.log(user);

        this.server.to(user.room).emit('message', { user: user.name, text: data });
        this.server.to(user.room).emit('roomData', {room: user.room, users: this.usersService.getUserInRoom(user.room)});

        return '';
    }






}