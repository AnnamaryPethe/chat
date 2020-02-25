import React, {useContext, useState} from 'react';
import UserContext, {User} from "../../context/UserContext";
import {LinkButton, ProfileContainer, Text} from "./profileButton-style";
import {Link, useParams} from "react-router-dom";
import {Profile} from "../Profile/Profile";

export const ProfileButton: React.FC = () => {
    const context = useContext<Partial<User>>(UserContext);
    const {id} = useParams();
    const [isShow, setIsShow] = useState(false);


    const onClick = () => {
        setIsShow(!isShow);
    };

    return (
            <ProfileContainer>
                <Text>
                    Hello {context.nickname}, welcome!
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