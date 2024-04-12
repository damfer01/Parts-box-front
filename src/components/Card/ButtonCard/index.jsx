import styled from "styled-components";

export const Button =  styled.button`
    background: #334155;
    display:  flex;
    align-items: center;
    justify-content: center ;
    color: #FFF;
    width: 180px;
    height: 65px;
    background-color : ${({theme, $color})=> theme.colors[$color]} ;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    font-weight :600;
    transition: all .2s;

    &:disabled{
        
        opacity:.5;
    }

    &:active:not([disabled]) {
        opacity: .95;
        scale: .95;
    }

`