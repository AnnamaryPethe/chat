import styled from "@emotion/styled";


export const ProfileContainer = styled.div`
    margin: 20px;
    padding: 50px;
    padding-right: 1000px;
    width: 100%;
    z-index: 1;
    position: relative;
    width: '20px';
    padding: '60px 40px';
    // background: rgb(146, 146, 201);
    boxShadow: '0 15px 20px rgba(255, 255, 255, 0.59)';
    
        
`;

export const Text = styled.h2({
    size: '14px',
    weight: '50px',
    color: 'white',
});

export const LinkButton = styled.div({
    background: '#e91e63',
    height: '80px',
    padding: '10px',
    boxSizing: 'border-box',
    width: '200px',
    border: '1px solid rgb(255, 255, 255)',
    color: 'rgb(255, 255, 255)',
    cursor: 'pointer',
    textTransform: 'uppercase',
    submitHover: {
        background: '#2979FF'
    }
});


