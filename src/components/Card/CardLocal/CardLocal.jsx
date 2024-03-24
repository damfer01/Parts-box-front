import { LocalStyle } from "../VisualCaixa/LocalStyle" 
import { format } from "date-fns"

export function CardLocal({onClick,_id,dono, motor, data,pecas}) {
    


    return (
        <LocalStyle onClick={onClick}>
    
            <span>{dono}</span>
            <span>{motor}</span>
            <span>{format(data,"dd/MM/yyyy - HH:mm:ss")}</span>
            
            
           

           
        </LocalStyle>
    )
}
