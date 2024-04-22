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
        /* display: flex; */
        align-items: center;
        justify-content: center ;
        padding: 16px;
         margin: 3px; 
        margin-left:18px;
        width:  240px;
        height: 34PX;
        font-size: 16px;
        border-radius:20px;
        background-color: #c5c5c5;
        border: 1px solid #000;
        color: #fff;
        &::placeholder {
            color: #444;
        }
    }

    #excluir{
        background:#AD130C;
        display: flex;
        color: #fff;
      align-items: center;
      justify-content: center;
      margin: 5px; 
      padding: 3px;
      font-size: 10px;
      border-radius:5px;
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
        color: #fff;
      align-items: center;
      justify-content: center;
      margin: 5px; 
      margin-left:18px;
      padding: 3px;
      font-size: 10px;
      border-radius:5px;
        
    }
    
    

    form > .foco{
        background-color:#5389A0;
    }

    & > form {
        overflow: auto;
        background-color: #33415544;
        border: 1px solid  #818cf8;
        border-radius:4px;
        width: 280px;
        height: 565px;
        
    }

`;