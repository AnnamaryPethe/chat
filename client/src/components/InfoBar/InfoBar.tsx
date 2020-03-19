import React, {useContext} from 'react'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
import {InfoBarStyle, LeftInnerContainer, OnlineIcon, RightInnerContainer} from "./infobar-style";
import {Link, MemoryRouter} from "react-router-dom";
import UserContext, {User} from "../../context/UserContext";

interface Props {
    room?: string
}

export const InfoBar: React.FC<Props> = ({room}) => {
    const id = useContext<Partial<User | undefined>>(UserContext);
    return (
        <InfoBarStyle>
            <LeftInnerContainer>
                <OnlineIcon src={onlineIcon} alt={"online"}/>
                <h3>{room}</h3>
            </LeftInnerContainer>
            <RightInnerContainer>
                <Link to={`/dashboard/${id}`}><img src={closeIcon} alt="close"/></Link>
            </RightInnerContainer>
        </InfoBarStyle>
    )
};

export default InfoBar;