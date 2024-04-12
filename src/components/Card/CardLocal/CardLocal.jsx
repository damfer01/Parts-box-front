import { LocalStyle } from "./LocalStyle"
import { format } from "date-fns"

export function CardLocal({ onClick, dono, motor, data }) {
   return (
        <LocalStyle onClick={onClick}>
            <span>{dono}</span>
            <span>{motor}</span>
            <span>{format(data, " dd/MM/yyyy ")}</span>
        </LocalStyle>
    )
}
