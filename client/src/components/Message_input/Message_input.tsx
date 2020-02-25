import React from "react";
import {DivForm, InputStyle, SendButton} from "./message_input-style";

export interface InputProps {
    message: string,
    sendMessage: Function,
    setMessage: Function
}



const Input: React.FC<InputProps> = ({ setMessage, sendMessage, message}) => (
    <DivForm >
        <InputStyle
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={event => setMessage(event.target.value)}
            onKeyPress={event => event.key ==='Enter' ? sendMessage(event) : null}/>
        <SendButton onClick={event => sendMessage(event)}>Send</SendButton>
    </DivForm>


);

export default Input;