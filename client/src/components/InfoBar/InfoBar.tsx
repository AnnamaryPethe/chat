import React from 'react'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
import {InfoBarStyle, LeftInnerContainer, OnlineIcon, RightInnerContainer} from "./infobar";

interface Props {
    room: string
}

const InfoBar: React.FC<Props> = ({room}) => (
    <InfoBarStyle >
        <LeftInnerContainer >
            <OnlineIcon src={onlineIcon} alt={"online"}/>
            <h3>{room}</h3>
        </LeftInnerContainer>
        <RightInnerContainer >
            <a href="/dashboard/id"><img src={closeIcon} alt="close"/></a>
        </RightInnerContainer>
    </InfoBarStyle>
);

export default InfoBar;