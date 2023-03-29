
import Mapa from "../componets/Mapa";
import { barragens } from "../monks/barragens";
import { useEffect, useState } from "react";
import NavBar from "../componets/NavBar";
import { buscaBarragens } from "../utils";

const Home = () => {
  const [listaBarragens, setListaBarragens]= useState(barragens);
  const [busca, setBusca]= useState("");
  const [categoria, setCategoria]= useState("");
  const [dano, setDano]= useState("");


  useEffect(() => {
    setListaBarragens(buscaBarragens(barragens,busca,categoria,dano));

  },[busca, categoria, dano]
  )
  return (
    <>
      <div>
        <NavBar setBusca ={setBusca} setCategoria ={setCategoria} setDano ={setDano} />
        <Mapa />
        listaBarragens={listaBarragens}
       
      </div>
    </>
  );
};

export default Home;
