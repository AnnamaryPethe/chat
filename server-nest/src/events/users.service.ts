import { Injectable } from '@nestjs/common';
import { User } from './interfaces/events.interfaces'

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [];
    }

    public add(data: User) {
        this.users.push(data);
        // console.log('Added: ', this.users);
    }

    public isValidName(data: User): boolean {
        for(const user of this.users) {
            if (user.name === data.name && user.room === data.room) {
                return false;
            }
        }
        return true;
    }

    public removeUser(id: string){

        const index = this.users.findIndex(user => user.id === id );
        delete this.users[index];

    }

    public getUser(id: string): User {
        return this.users.find(user => user.id === id);
    }

    public getUserInRoom(room: string): User {
        return this.users.find(user => user.room === room);
    }

    public getAllRooms(): Set<string> {
        // console.log('rooms', this.users);
        const rooms: Set<string> = new Set<string>();
        for (const user of this.users) {
            rooms.add(user.room);
        }
        return rooms;
    }

    public getAllUsersInRoom(room: string): Set<any> {
        const usersList = new Set();
        for (let user of this.users) {
            if(user.room === room) {
                usersList.add(user.name);
            }
        }
        return usersList;
    }


}