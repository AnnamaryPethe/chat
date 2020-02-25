import React from 'react'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
import {InfoBarStyle, LeftInnerContainer, OnlineIcon, RightInnerContainer} from "./infobar-style";
import {Link, useParams} from "react-router-dom";

interface Props {
    room: string
}

const InfoBar: React.FC<Props> = ({room}) => {
    const {id} = useParams();
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