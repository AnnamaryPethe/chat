import React from 'react';
import styled from "@emotion/styled";
import onlineIcon from '../../icons/onlineIcon.png';


const TextContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '160px',
    color: 'white',
    height: '80%',
    justifyContent: 'space-between',
    '@media (min-width: 320px) and (max-width: 1200px)': {
        display: 'none'
    }
});

const ActiveContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '90%'
});

const ActiveItem = styled.div({
    display: 'flex',
    alignItems: 'center'
});

const ActiveImage = styled.img({
    paddingLeft: '10px'
});

const TextH1 = styled.h1({
    marginBottom: '0'
});



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