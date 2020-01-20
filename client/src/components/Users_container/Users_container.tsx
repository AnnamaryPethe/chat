import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './Users_container.css';

export interface IUsersProps {
    users: string[]
}

class UsersContainer extends React.Component<IUsersProps, {}> {
    render() {
        let {users} = this.props;
        return (
            <div className="textContainer">
                {
                    users
                        ? (
                            <div>
                                <h1>People currently chatting:</h1>
                                <div className="activeContainer">
                                    <h2>
                                        {users.map((name) => (
                                            <div key={name} className="activeItem">
                                                {name}
                                                <img alt="Online Icon" src={onlineIcon}/>
                                            </div>
                                        ))}
                                    </h2>
                                </div>
                            </div>
                        )
                        : null
                }
            </div>
        );
    }
}

export default UsersContainer;