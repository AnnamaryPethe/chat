import React from 'react'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
import styled from "@emotion/styled";

const InfoBarStyle = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#21a1ff',
    borderRadius: '4px 4px 0 0',
    height: '60px',
    width: '100%'
});

const LeftInnerContainer = styled.div({
    flex: '0.5',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5%',
    color: 'white'
});

const OnlineIcon = styled.img({
    marginRight: '5%'
});

const RightInnerContainer = styled.div({
    display: 'flex',
    flex: '0.5',
    justifyContent: 'flex-end',
    marginRight: '5%'
});

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
            <a href="/dashboard"><img src={closeIcon} alt="close"/></a>
        </RightInnerContainer>
    </InfoBarStyle>
);

export default InfoBar;