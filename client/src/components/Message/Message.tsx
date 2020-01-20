import React from 'react'
// import ReactEmoji from 'react-emoji';
import './Message.css'

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
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{text}</p>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{text}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    )

};

export default Message;