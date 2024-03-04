//import { Rows, SquaresFour } from "@phosphor-icons/react";
//import { SelectionButton } from "../../components/SelectionButton";
import { GridView, Section, SelectGridView, } from "./style";
import { useEffect, useState } from "react";
import { Button } from "../../components/Card/ButtonCard";
import { CardAdicionar  } from "../../components/Card/CardAdicionar/CardAdicionar ";
import { useNavigate } from 'react-router-dom';
import { BarraPesquisa } from "../../components/BarraDePesquisa/BarraPesquisa";
import { CardLocal } from "../../components/Card/ButtonCard/CardLocal/CardLocal";





export default function Home() {
  const [showCard, setShowCard] = useState(false)
 


 

    
      return (
        <Section>
          <SelectGridView>
            <BarraPesquisa/>

            

            

    

            
           <Button  
            type="submit"
            onClick={()=>   setShowCard(true) }
            >
                adicionar +
              </Button>

          </SelectGridView>
              <CardLocal  />
              <CardLocal  />
              

         <CardAdicionar showCard={showCard} onClose={() => setShowCard(false)} />
             


            
    </Section>
      );
      
}