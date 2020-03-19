import React from 'react';
import {H3, Li, RoomBoxDiv} from "./rooms-style";

interface Props {
    rooms: string[]
}

export const Rooms: React.FC<Props> = ({rooms}) => {
        return (
            <RoomBoxDiv>
                <H3 >Active rooms:</H3>
                <div>
                    {rooms.map((room: string, i: number) => <Li key={i}> {room} </Li>)}
                </div>
            </RoomBoxDiv>
        );
};

export default Rooms;