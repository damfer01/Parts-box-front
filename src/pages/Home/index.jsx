//import { Rows, SquaresFour } from "@phosphor-icons/react";
//import { SelectionButton } from "../../components/SelectionButton";
import { GridView, Section, SelectGridView, } from "./style";
import { useEffect, useState, ChangeEvent } from "react";
import { Button } from "../../components/Card/ButtonCard";
import { CardAdicionar } from "../../components/Card/CardAdicionar/CardAdicionar ";
import { BarraPesquisa } from "../../components/BarraDePesquisa/BarraPesquisa";
import { CardLocal } from "../../components/Card/ButtonCard/CardLocal/CardLocal";
import api from "../../config/api";
import { VisualCaixa } from "../../components/Card/ButtonCard/CardLocal/VisualCaixa/VisualCaixa";





export default function Home() {
  const [showCard, setShowCard] = useState(false);
  
  const[caixa, setCaixa]=useState(null);

  const [caixas, setCaixas] = useState([]);

  const[search,setSearch]= useState('')

  async function loadCaixas() {
    try {
      const { data: {result} } = await api.get('/caixa'); // api.delete(`/caixa/${id}`)
      
      setCaixas(result)
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

  useEffect(() => {
    if(caixa === null) {
      loadCaixas();
    }
  }, [caixa]);


  const handleDelete = (id) => {
    setCaixas((caixas) => caixas.filter((caixa) => caixa._id !== id))

    setCaixa(null);
  }

  function handleSearch(event){
    const query = event.target.value

    setSearch(query)
  }

  const filterCaixas =search !== ''
  ?caixa.filter(caixa=> caixa.content.toLocalLowerCase().includes(search.toLocaleLowerCase()))
  :caixa


  return (
    <Section>
      <SelectGridView>
        <Button
          type="submit"
          onClick={() => setShowCard(true)}
        >
          adicionar +
        </Button>
        <BarraPesquisa  type="text"  onChange={handleSearch}/>

      </SelectGridView>

      <span>Cadastrados :</span>

      <GridView  >
        {
          caixas.map((caixa) => (
            <CardLocal  onClick={() => setCaixa(caixa)}
               
               {...caixa} 
               key={caixa._id} 
             />
          ))
        }

        
         

      </GridView>



        <VisualCaixa caixa={caixa} onClose={() => setCaixa(null)} />

      <CardAdicionar showCard={showCard} onClose={() => setShowCard(false)} />




    </Section>
  );

}