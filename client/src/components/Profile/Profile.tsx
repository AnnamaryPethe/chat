import React, {useContext} from 'react';
import {Container, ProfileContainer} from './profile'
import UserContext, {User} from "../../context/UserContext";

export const Profile: React.FC = () => {

    const {firstName, lastName, nickname} = useContext<Partial<User>>(UserContext);
    console.log(firstName);

    return (

        <Container>
            <ProfileContainer>
                <div>First name:
                    <p> - {firstName}</p>
                </div>
                <div>Last name:
                    <p> - {lastName}</p>
                </div>
                <div>Nickname:
                    <p> - {nickname}</p>
                </div>
            </ProfileContainer>
        </Container>

    )
};
