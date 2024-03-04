import styled from "styled-components";

export const LocalStyle = styled.dialog`

     background: #5389A0;
    position: relative;
    display:  flex;
    top:180px;
    left: 10px;
    align-items: center;
    justify-content: center ;
    width: 280px;
    height: 55px;
    margin: 3px;
    gap: 3px;
    grid-auto-flow:3x;
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
   
  
    

  
    `;