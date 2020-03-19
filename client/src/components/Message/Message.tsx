import React from 'react'
import {
    MessageBoxBackgroundBlue, MessageBoxBackgroundLight,
    MessageContainerJustifyEnd,
    MessageContainerJustifyStart, MessageTextColorDark,
    MessageTextColorWhite, SentTextPl10,
    SentTextPr10
} from "./message-style";
// import ReactEmoji from 'react-emoji';

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
                <SentTextPr10 > {trimmedName} </SentTextPr10>
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