import styled from "styled-components";

export const LocalStyle = styled.button`

     background-color: #334155;
    display:  flex;
    flex-direction: column;
    padding: 16px;
    border: none;
    border-radius: 10px;
    color: #FFF;
    font-size: 16px;
    font-weight :600;
    
    transition: all .2s;

    &:disabled{
        opacity:.5;
    }

    &:active:not([disabled]) {
        
        opacity: .95;
        scale: .95;
    }
   
  span{
    margin:3px;
  }
    

  
    `;