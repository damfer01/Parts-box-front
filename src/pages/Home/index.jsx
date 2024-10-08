import api from "../../config/api";
import { GridView, Section, SelectGridView, } from "./style";
import { useEffect, useState } from "react";
import { Button } from "../../components/Card/ButtonCard";
import { CardAdicionar } from "../../components/Card/CardAdicionar/CardAdicionar ";

import { CardLocal } from "../../components/Card/CardLocal/CardLocal";
import { VisualCaixa } from "../../components/Card/VisualCaixa/VisualCaixa";

import { PesquisaStyle } from "../../components/BarraDePesquisa/Pesquisa";
import { useStore } from "../../store";
import Patrocinio from "../../components/ButtonPatrocinio/Patrocinio";
import { Type } from "../../components/Type";



export default function Home() {
  const {
    user,
  } = useStore();
  const [showCard, setShowCard] = useState(false);

  const [caixa, setCaixa] = useState(null);

  const [caixas, setCaixas] = useState([]);

  const [search, setSearch] = useState('')

  async function loadCaixas() {
    try {
      const { data: { result } } = await api.get('/caixa', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      }); // api.delete(`/caixa/${id}`)

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
    if (caixa === null || !showCard) {
      loadCaixas();
    }
  }, [caixa, showCard]);


  const handleDelete = (id) => {
    setCaixas((caixas) => caixas.filter((caixa) => caixa._id !== id))

    setCaixa(null);
  }

  function handleSearch(event) {
    const query = event.target.value

    setSearch(query)
  }

  return (
    <Section>
      <SelectGridView>
        
        <Patrocinio/>

        <Button
          type="submit"
          onClick={() => setShowCard(true)}
        >
          adicionar +
        </Button>

        <PesquisaStyle >
          <input placeholder='Busque suas caixas...' onChange={(e) => setSearch(e.target.value)}></input>
        </PesquisaStyle >


      </SelectGridView>

      <span  id="cadastro">Cadastrados :</span>

      <GridView  >
        {
          caixas.filter(caixa =>
             caixa.dono.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
             caixa.marca.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
             caixa.pecas.some((cod) => cod.nome.includes(search))||
             caixa.pecas.some((cod) => cod.codigo.includes(search)) ||
             caixa.pecas.some((cod) => cod.medida.includes(search)) 
             
        ).map((caixa) => (
            <CardLocal onClick={() => setCaixa(caixa)}

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

};