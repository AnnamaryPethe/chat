import styled from "@emotion/styled";

export const DivForm = styled.div({
    display: 'flex',
    borderTop: '2px solid #D3D3D3'
});

export const InputStyle = styled.input({
    border: 'none',
    borderRadius: '0',
    padding: '5%',
    width: '80%',
    fontSize: '1.2em',
    outline: 'none',
    focus: 'focus'
});

export const SendButton = styled.button({
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