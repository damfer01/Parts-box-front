import styled from "styled-components";

export const Button =  styled.button`
    background: #5389A0;
    position: relative;
    display:  flex;
    top:50px;
   right: 240px;
    align-items: center;
    justify-content: center ;
    width: 180px;
    height: 65px;
    background-color : ${({theme, $color})=> theme.colors[$color]} ;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    font-weight :600;
    color: ${({theme}) => theme.colors.white};
    transition: all .2s;

    &:disabled{
        opacity:.5;
    }

    &:active:not([disabled]) {
        opacity: .95;
        scale: .95;
    }

`