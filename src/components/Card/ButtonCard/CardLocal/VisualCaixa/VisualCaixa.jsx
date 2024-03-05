
import { LocalSttyle } from "../../../../../components/Card/ButtonCard/CardLocal/VisualCaixa/style";

import { X } from 'lucide-react';


export function VisualCaixa({caixa, onClose }) {
   
    return caixa !== null ? (
        <LocalSttyle open >

            

                <button onClick={onClose}><X /></button>
                   <div> 
                <span>{caixa.dono}</span>
                <span>{caixa.motor}</span>
                <span>{caixa.data}</span>
                 </div>
                    <span>peças</span>
                {
                    caixa.pecas.map((peca) => (
                        <div>
                        <span className="foco">{peca.nome}</span>
                        <span>{peca.codigo}</span>
                        <span>{peca.medida}</span>
                        </div>
                    ))
                }



                <button className="excluir">Excluir</button>
            

        </LocalSttyle>
    ) : <></>
}