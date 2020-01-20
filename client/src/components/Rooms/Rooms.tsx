import React from 'react';
import './Rooms.css'
// import ScrollToBottom from "react-scroll-to-bottom";

interface Props {
    rooms: string[]
}

class Rooms extends React.Component<Props, {}> {
    render() {
        let {rooms} = this.props;
        return (
            <div>
                <div className="roomsBox">
                    <h3>Active rooms:</h3>
                    <div>
                        {rooms.map((room, i) => <li key={i}> {room} </li>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Rooms;