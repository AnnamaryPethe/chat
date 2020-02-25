import styled from "@emotion/styled";

export const TextContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '160px',
    color: 'white',
    height: '80%',
    justifyContent: 'space-between',
    '@media (min-width: 320px) and (max-width: 1200px)': {
        display: 'none'
    }
});

export const ActiveContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '90%'
});

export const ActiveItem = styled.div({
    display: 'flex',
    alignItems: 'center'
});

export const ActiveImage = styled.img({
    paddingLeft: '10px'
});

export const TextH1 = styled.h1({
    marginBottom: '0'
});