import React from 'react';
import {Rooms} from '../components/Rooms/Rooms';

export default {
    title: 'Rooms',
    component: Rooms
}

const roomData = [
    "first", "second", "third"
];

const emptyRoomData = [
    " "
];


export const Empty = () => <Rooms rooms={emptyRoomData}/>;

export const Default = () => <Rooms rooms={roomData}/>;

