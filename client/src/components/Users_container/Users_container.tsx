import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import {ActiveContainer, ActiveImage, ActiveItem, TextContainer, TextH1} from "./user_container-style";


export interface IUsersProps {
    users: string[]
}

class UsersContainer extends React.Component<IUsersProps, {}> {
    render() {
        let {users} = this.props;
        return (
            <TextContainer className="textContainer">
                {
                    users
                        ? (
                            <div>
                                <TextH1>People currently chatting:</TextH1>
                                <ActiveContainer className="activeContainer">
                                    <h2>
                                        {users.map((name) => (
                                            <ActiveItem key={name} className="activeItem">
                                                {name}
                                                <ActiveImage alt="Online Icon" src={onlineIcon}/>
                                            </ActiveItem>
                                        ))}
                                    </h2>
                                </ActiveContainer>
                            </div>
                        )
                        : null
                }
            </TextContainer>
        );
    }
}

export default UsersContainer;