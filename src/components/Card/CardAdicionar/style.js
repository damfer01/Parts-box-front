import styled from "styled-components";

export const CardSttyle = styled.dialog`
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center ;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 24px;
    font-weight: 600;
    transition: all .2s;
    background-color: #00000044;

    input{
        background-color: #c5c5c5;
        display: flex;
        padding: 16px;
         font-size: 16px;
        border-radius:20px;
        border: 1px solid #000;
         margin: 2px;
        align-items: center;
        justify-content: center ;
        width:  240px;
        height: 34PX;
        &::placeholder {
            color: #444;
        }
    }

    

    form >.comfirmar{
         background-color:#5389A0;
         position:relative;
         display: flex;
         top: 10px;
         left: 100px;
         padding: 3px;
         border-radius:4px;
     }
     form > button {
        background:#AD130C;
        display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
      padding: 3px;
      font-size: 10px;
      border-radius:5px;
        
    }

    form > .foco{
        background-color:#5389A0;
    }

    & > form {
        overflow: auto;
        background-color: #38bdf844;
        border: 1px solid  #818cf844;
        border-radius:4px;
        width: 280px;
        height: 565px;
        
    }

`;