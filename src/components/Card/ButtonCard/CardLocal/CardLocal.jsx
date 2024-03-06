import { LocalStyle } from "./VisualCaixa/LocalStyle"


export function CardLocal({onClick,_id,dono, motor, data,pecas}) {

    return (
        <LocalStyle onClick={onClick}>
    
            <span>{dono}</span>
            <span>{motor}</span>
            <span>{data/*{locale:ptBR , addSuffix:true}*/}</span>
            
            
            

           
        </LocalStyle>
    )
}