import styled from "@emotion/styled";

export const Container = styled.div`
    background: #183E7F;
    opacity: 80%;
    display: flex;
    width: 100%;
    margin-top: 30px;
    font-weight: 80px;
    position: relative;
    border: '1px solid rgb(255, 255, 255)'; 
    font-family: 'sans-serif';
`;

export const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    > div {
        font-size: 20px;
        font-weight: 30px;
        color: black;
        > p {
            font-size: 20px;
            font-weight: 20px;
            color: white;
            margin: 10px;
            padding: 5px;
        }
    }
`;

