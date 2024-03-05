import { LocalStyle } from "./VisualCaixa/LocalStyle"

export function CardLocal({onClick,_id,dono, motor, data,pecas}) {

    return (
        <LocalStyle onClick={onClick}>
    
            <span>{dono}</span>
            <span>{motor}</span>
            <span>{data}</span>
            
            {
                pecas.map((peca)=>(
                    <span>{peca.nome}</span>
                ) )
            }
            

           
        </LocalStyle>
    )
}