import React, {useContext} from 'react';
import {Container, ProfileContainer} from './profile-style'
import UserContext, {User} from "../../context/UserContext";

export const Profile: React.FC = () => {

    const data = useContext<Partial<User | undefined>>(UserContext);
    console.log(data?.data?.user);

    return (

        <Container>
            <ProfileContainer>
                <div> First name:
                    <p>😃 {data?.data?.user.firstName}</p>
                </div>
                <div> Last name:
                    <p>😜 {data?.data?.user.lastName}</p>
                </div>
                <div> Nickname:
                    <p>😱 {data?.data?.user.nickname}</p>
                </div>
            </ProfileContainer>
        </Container>

    )
};
