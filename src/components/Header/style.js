import styled from "styled-components";

export const HeaderView = styled.header`
    background:#334155;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 72px;
    background-color : ${({theme}) => theme.colors.primary};

`;
