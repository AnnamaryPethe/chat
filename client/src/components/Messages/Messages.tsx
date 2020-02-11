import React from 'react';
import Message, {IMessage} from '../Message/Message';

import styled from "@emotion/styled";

// import ScrollToBottom from 'react-scroll-to-bottom';

const Div = styled.div({
    padding: '5% 0',
    overflow: 'auto',
    flex: 'auto'
});

interface IMessages {
    messages: IMessage[],
    name: string
}

const Messages: React.FC<IMessages> = ({ messages, name}) => (
    <Div>
        {messages.map((message: IMessage, i: number) => <div key={i}><Message message={message} name={name}/></div>)}
    </Div>
);

export default Messages;