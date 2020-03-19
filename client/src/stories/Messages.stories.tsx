import React from "react";
import Messages from "../components/Messages/Messages";

export default {
    title: "Messages",
    components: Messages
}

const messages = {
    messages: [{
        user: "test",
        text: "is it working?"
    },
    {
        user: "other one",
        text: "second text"
    },
    {
        user: "it is working",
        text: "yeah"
    }
    ],
    name: "test name"
};

export const lotsOfMessages = () => <Messages messages={messages.messages} name={messages.name}/>;