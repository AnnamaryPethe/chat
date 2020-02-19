import styled from "@emotion/styled";

export const Container = styled.div`
    background: #3962F9;
    display: flex;
    width: 70%;
    margin-top: 30px;
    font-weight: 80px;
    position: relative;
    border: '1px solid rgb(255, 255, 255)';
    font-family: 'sans-serif';
`;

export const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    > p {
        font-size: 20px;
        font-weight: 500;
        color: black;
        > div {
            font-size: 30px;
            font-weight: 500;
            color: black;
            margin: 20px;
            padding: 10px;
        }
    }
`;

