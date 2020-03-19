import styled from "@emotion/styled";

export const InfoBarStyle = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#21a1ff',
    borderRadius: '4px 4px 0 0',
    height: '60px',
    width: '100%'
});

export const LeftInnerContainer = styled.div({
    flex: '0.5',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5%',
    color: 'white'
});

export const OnlineIcon = styled.img({
    marginRight: '5%'
});

export const RightInnerContainer = styled.div({
    display: 'flex',
    flex: '0.5',
    justifyContent: 'flex-end',
    marginRight: '5%'
});