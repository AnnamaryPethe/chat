import React from "react";

import styled from "@emotion/styled";

const DivForm = styled.div({
    display: 'flex',
    borderTop: '2px solid #D3D3D3'
});

const InputStyle = styled.input({
    border: 'none',
    borderRadius: '0',
    padding: '5%',
    width: '80%',
    fontSize: '1.2em',
    outline: 'none',
    focus: 'focus'
});

const SendButton = styled.button({
    textTransform: 'uppercase',
    display: 'inline-block',
    border: 'none',
    width: '20%',
    backgroundColor: '#21a1ff',
    padding: '14px 28px',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#fdf6f1',

});

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