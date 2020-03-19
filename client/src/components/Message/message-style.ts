import styled from "@emotion/styled";

export const MessageContainerJustifyEnd = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 5%',
    marginTop: '3px',
});

export const MessageContainerJustifyStart = styled.div({
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '0 5%',
    marginTop: '3px',
});

export const SentTextPr10 = styled.p({
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    color: '#828282',
    letterSpacing: '0.3px',
    paddingLeft: '10px'
});

export const SentTextPl10 = styled.p({
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    color: '#828282',
    letterSpacing: '0.3px',
});

export const MessageBoxBackgroundBlue = styled.div({
    borderRadius: '20px',
    padding: '5px 20px',
    color: 'white',
    display: 'inline-block',
    maxWidth: '80%',
    background: '#6631fb'
});

export const MessageTextColorWhite = styled.p({
    width: '100%',
    letterSpacing: '0',
    float: 'left',
    fontSize: '1.1em',
    wordWrap: 'break-word',
    verticalAlign: 'middle'
});

export const MessageBoxBackgroundLight = styled.div({
    background: '#F3F3F3',
    borderRadius: '20px',
    padding: '5px 20px',
    color: 'white',
    display: 'inline-block',
    maxWidth: '80%',
});

export const MessageTextColorDark = styled.p({
    width: '100%',
    letterSpacing: '0',
    float: 'left',
    fontSize: '1.1em',
    wordWrap: 'break-word',
    color: '#353535',
    verticalAlign: 'middle'
});

