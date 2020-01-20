import React from "react";
import './Message_input.css'

export interface InputProps {
    message: string,
    sendMessage: Function,
    setMessage: Function
}

const Input: React.FC<InputProps> = ({ setMessage, sendMessage, message}) => (
    <div className="form">
        <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={event => setMessage(event.target.value)}
            onKeyPress={event => event.key ==='Enter' ? sendMessage(event) : null}/>
        <button className="sendButton info" onClick={event => sendMessage(event)}>Send</button>
    </div>


);

export default Input;