import React from 'react';

import styled from "@emotion/styled";

let H3 = styled.h3({
    color: "white"
});

let RoomBox = styled.div({
    position: 'absolute',
    top: '0',
    left: '-100%',
    transform: 'translate(-50%, -50%)',
    width: '150px',
    padding: '60px 40px',
    boxShadow: '0 15px 20px rgba(255, 255, 255, 0.59)',
    color: 'white'
});

const Li = styled.li({
    color: 'white'
});

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