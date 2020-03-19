import styled from "@emotion/styled";

export const OuterContainer = styled.div({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    top:'5%',
    left: '10%',
    '@media (min-width: 320px) and (max-width: 480px)': {
        height: '100%'
    }
});

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,255,0.5)',
    borderRadius: '8px',
    height: '75%',
    width: '100%',
    '@media (min-width: 320px) and (max-width: 480px)': {
        width: '100%',
        height: '100%'
    },
    '@media (min-width: 480px) and (max-width: 1200px)': {
        width: '60%'
    }
});

export const Video = styled.video({
    position: 'fixed',
    right: '0',
    bottom: '0',
    minWidth: '100%',
    minHeight: '100%'
});