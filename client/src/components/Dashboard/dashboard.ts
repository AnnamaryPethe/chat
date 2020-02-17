import styled from "@emotion/styled";

export const DivBody = styled.div({
    fontFamily: 'sans-serif',
    padding: '0',
    margin: '0',
    width: '100%',
    height: '100vh',
    background: '#f9f9f9'
});

export const JoinContainer = styled.div({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    padding: '60px 40px',
    // background: rgb(146, 146, 201);
    boxShadow: '0 15px 20px rgba(255, 255, 255, 0.59)',
});

export const JoinContainerH1 = styled.h1({
    margin: '0 0 40px',
    padding: '0',
    textAlign: 'center',
    color: 'white'
});

export const JoinInput = styled.div({
    position: 'relative',
    margin: '20px 0',

});

export const Input = styled.input({
    color: 'white',
    outline: 'none',
    height: '40px',
    padding: '10px',
    boxSizing: 'border-box',
    width: '100%',
    border: '1px solid rgb(249, 249, 255)',
    background: 'transparent',
    fontSize: '18px'
});

export const Button = styled.button({
    background: '#e91e63',
    height: '40px',
    padding: '10px',
    boxSizing: 'border-box',
    width: '100%',
    border: '1px solid rgb(255, 255, 255)',
    color: 'rgb(255, 255, 255)',
    cursor: 'pointer',
    textTransform: 'uppercase',
    submitHover: {
        background: '#2979FF'
    }
});

export const Video = styled.video({
    marginTop: '30px',
    position: 'fixed',
    right: '0',
    bottom: '0',
    minWidth: '100%',
    minHeight: '100%'
});
