import styled from "@emotion/styled";

export const Container = styled.div`
    background: #fff;
    display: flex;
    width: 50%;
    margin-top: 30px;
    font-weight: 100;
    position: relative;
`;

export const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    > p {
        font-size: 30px;
        font-weight: 500;
        color: white
        > div {
            font-size: 30px;
            font-weight: 500;
            color: white;
            margin: 50px;
            padding: 30px;
        }
    }
`;

