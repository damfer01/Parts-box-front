//import { Rows, SquaresFour } from "@phosphor-icons/react";
//import { SelectionButton } from "../../components/SelectionButton";
import { GridView, Section, SelectGridView, } from "./style";
import { useEffect, useState } from "react";
import { Button } from "../../components/Card/ButtonCard";
import { CardAdicionar } from "../../components/Card/CardAdicionar/CardAdicionar ";
import { BarraPesquisa } from "../../components/BarraDePesquisa/BarraPesquisa";
import { CardLocal } from "../../components/Card/ButtonCard/CardLocal/CardLocal";
import api from "../../config/api";





export default function Home() {
  const [showCard, setShowCard] = useState(false)

  const [caixas, setCaixas] = useState([]);

  async function loadCaixas() {
    try {
      const { data: {result} } = await api.get('/caixa');
      
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
    loadCaixas();
  }, []);






  return (
    <Section>
      <SelectGridView>
        <Button
          type="submit"
          onClick={() => setShowCard(true)}
        >
          adicionar +
        </Button>
        <BarraPesquisa />
      </SelectGridView>

      <span>Cadastrados</span>

      <GridView>
        {
          caixas.map((caixa) => (
            <CardLocal {...caixa} key={caixa._id} />
          ))
        }
      </GridView>




      <CardAdicionar showCard={showCard} onClose={() => setShowCard(false)} />




    </Section>
  );

}