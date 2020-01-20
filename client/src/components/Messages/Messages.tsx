import React from 'react';
import Message, {IMessage} from '../Message/Message';

import './Messages.css';

// import ScrollToBottom from 'react-scroll-to-bottom';

interface IMessages {
    messages: IMessage[],
    name: string
}

const Messages: React.FC<IMessages> = ({ messages, name}) => (
    <div className="messages">
        {messages.map((message: IMessage, i: number) => <div key={i}><Message message={message} name={name}/></div>)}
    </div>
);

export default Messages;