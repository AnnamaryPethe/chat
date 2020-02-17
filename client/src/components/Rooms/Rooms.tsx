import React from 'react';
import {H3, Li, RoomBox} from "./rooms";

class Rooms extends React.Component<{ rooms: string[] }> {

    render() {
        let {rooms} = this.props;
        return (
            <div>
                <RoomBox>
                    <H3 >Active rooms:</H3>
                    <div>
                        {rooms.map((room: string, i: number) => <Li key={i}> {room} </Li>)}
                    </div>
                </RoomBox>
            </div>
        );
    }
}

export default Rooms;