import React from "react";
import Message, {IMessage, Props} from '../components/Message/Message'

export default {
    title: 'Message',
    component: Message
}

const message = {
    message: {
        user: "test name",
        text: "first text????"
    },
    name: "name"
};


export const defaultMessage = () => <Message message={message.message} name={message.name}/>;
