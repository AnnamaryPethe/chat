import React from "react";
import { action } from '@storybook/addon-actions';
import Input, {InputProps} from "../components/Message_input/Message_input";

export default {
    title: "MessageInput",
    components: Input,
    excludeStories: /.*Data$/,
}

const message = "type here";


export const actionsData = {
    setMessage: action('setMessage'),
    sendMessage: action('sendMessage'),
};

export const messageInput = () => <Input message={message} {...actionsData}/>;
