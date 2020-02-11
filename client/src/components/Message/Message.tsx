import React from 'react'
// import ReactEmoji from 'react-emoji';

import styled from "@emotion/styled";

const MessageContainerJustifyEnd = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 5%',
    marginTop: '3px',
});

const MessageContainerJustifyStart = styled.div({
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '0 5%',
    marginTop: '3px',
});

const SentTextPr10 = styled.p({
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    color: '#828282',
    letterSpacing: '0.3px',
    paddingLeft: '10px'
});

const SentTextPl10 = styled.p({
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    color: '#828282',
    letterSpacing: '0.3px',
});

const MessageBoxBackgroundBlue = styled.div({
    borderRadius: '20px',
    padding: '5px 20px',
    color: 'white',
    display: 'inline-block',
    maxWidth: '80%',
    background: '#6631fb'
});

const MessageTextColorWhite = styled.p({
    width: '100%',
    letterSpacing: '0',
    float: 'left',
    fontSize: '1.1em',
    wordWrap: 'break-word',
    verticalAlign: 'middle'
});

const MessageBoxBackgroundLight = styled.div({
    background: '#F3F3F3',
    borderRadius: '20px',
    padding: '5px 20px',
    color: 'white',
    display: 'inline-block',
    maxWidth: '80%',
});

const MessageTextColorDark = styled.p({
    width: '100%',
    letterSpacing: '0',
    float: 'left',
    fontSize: '1.1em',
    wordWrap: 'break-word',
    color: '#353535',
    verticalAlign: 'middle'
});

export interface IMessage {
    user: string,
    text: string,
}

export interface Props {
    message: IMessage
    name: string
}


const Message: React.FC<Props> = ({message:  {user, text}, name}) => {
    let isSendByCurrentUser: boolean = false;

    const trimmedName: string = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSendByCurrentUser = true;
    }

    return(
        isSendByCurrentUser ? (
            <MessageContainerJustifyEnd >
                <SentTextPr10 >{trimmedName}</SentTextPr10>
                <MessageBoxBackgroundBlue >
                    <MessageTextColorWhite >{text}</MessageTextColorWhite>
                </MessageBoxBackgroundBlue>
            </MessageContainerJustifyEnd>
        ) : (
            <MessageContainerJustifyStart >
                <MessageBoxBackgroundLight >
                    <MessageTextColorDark >{text}</MessageTextColorDark>
                </MessageBoxBackgroundLight>
                <SentTextPl10 >{user}</SentTextPl10>
            </MessageContainerJustifyStart>
        )
    )

};

export default Message;