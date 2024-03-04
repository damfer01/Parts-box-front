import styled from "styled-components";

export const HeaderView = styled.header`
    background:#5389A0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 72px;
    background-color : ${({theme}) => theme.colors.primary};

`;
