import React, {useContext, useState} from 'react';
import UserContext, {User} from "../../context/UserContext";
import {LinkButton, ProfileContainer, Text} from "./profileButton-style";
import {Profile} from "../Profile/Profile";

export const ProfileButton: React.FC = () => {
    const context = useContext<Partial<User | undefined>>(UserContext);
    const [isShow, setIsShow] = useState(false);


    const onClick = () => {
        setIsShow(!isShow);
    };

    return (
            <ProfileContainer>
                <Text>
                    Hello {context?.data?.user.nickname}, welcome!
                </Text>
                <LinkButton>
                    <div onClick={() => onClick()}>
                        Click me to show/hide your profile
                    </div>
                    {
                        isShow
                            ? <Profile/>
                            : null
                    }
                </LinkButton>
            </ProfileContainer>
    );

};