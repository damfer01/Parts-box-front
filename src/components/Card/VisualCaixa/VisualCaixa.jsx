import api from "../../../config/api";
import { format } from "date-fns"

import { VisualSttyle } from "./VisualStyle"; 

import { X } from 'lucide-react';





export function VisualCaixa({caixa, onClose}) { 
    
         async function deleteCaixas() {
             try {
               await api.delete(`/caixa/${caixa._id}`);
               

               onClose();
             } catch (err) {
              if (err.response) {
                const { data } = err.response;
        
               return {
                  success: data.success,
                   message: data.message,
             };
            } else {
              return {
              success: false,
                message: "falha ao se comunicar com o servidor !!",
             }
            }
           }
          }

   
    return caixa !== null ? (
        <VisualSttyle open >

            

                <button onClick={onClose}><X /></button>
                   <div> 
                <span>{caixa.dono}</span>
                <span>{caixa.motor}</span>
                <span>{format(caixa.data,"dd/MM/yyyy - HH:mm")}</span>
                 </div>
                    <span className="pecas">peças</span>
                {
                    caixa.pecas.map((peca) => (
                        <div>
                        <span className="foco">{peca.nome}</span>
                        <span>{peca.codigo}</span>
                        <span>{peca.medida}</span>
                        </div>
                    ))
                }


              

                <button className="excluir" onClick={deleteCaixas}>Excluir</button>
               
            
                
        </VisualSttyle>
    ) : <></>
}