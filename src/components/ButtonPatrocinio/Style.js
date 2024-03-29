import styled from "styled-components";

export const Style = styled.button`
    color: #5389A0;
    background-color: transparent;
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center ;
    background-color : ${({ theme, $color }) => theme.colors[$color]} ;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    transition: all .2s;

    &:disabled{
        
        opacity:.5;
    }

    &:active:not([disabled]) {
        opacity: .95;
        scale: .95;
    }

    a{

        color: #5389A0;
        background-color: transparent;
    display: flex;
align-self: flex-end;
    align-items: center;
    justify-content: center ;
    margin-left: 8px;
    background-color : ${({ theme, $color }) => theme.colors[$color]} ;
    border: none;
    font-size: 16px;
    transition: all .2s;

    &:disabled{
        
        opacity:.5;
    }

    &:active:not([disabled]) {
        opacity: .95;
        scale: .95;
    }

    }

`