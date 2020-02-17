import React, {useContext} from 'react';
import {Container, ProfileContainer} from './profile'
import UserContext, {User} from "../../context/UserContext";

export const Profile: React.FC = () => {

    const {firstName, lastName, nickname} = useContext<Partial<User>>(UserContext);
    console.log(firstName);

    return (

        <Container>
            <ProfileContainer>
                <p>First name:
                    <div>{firstName}</div>
                </p>
                <p>Last name:
                    <div>{lastName}</div>
                </p>
                <p>Nickname:
                    <div>{nickname}</div>
                </p>
            </ProfileContainer>
        </Container>

    )
};
