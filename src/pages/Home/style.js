import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

 #cadastro{
    margin-left: 18px;
 }
`;


export const SelectGridView = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;


    `;

export const GridView = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    grid-gap:16px;
    flex:1;
    padding: 0px 16px; 
    padding-top: 16px;
    overflow: auto ;  
    
    `;
