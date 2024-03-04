import { LocalStyle } from "./LocalStyle";

export function CardLocal({_id,dono, motor, data}) {

    return (
        <LocalStyle>
            <span>{dono}</span>
            <span>{motor}</span>
            <span>{data}</span>
        </LocalStyle>
    )
}