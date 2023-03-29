import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TemaContext } from "../../Context/TemaContext";

const Home = () => {
  const location = useLocation();

  const nome = location.state?.nome;
  const { temabody, temaTexto } = useContext(TemaContext);

  return (
    <>
      <div className={`bg-${temabody} ${temaTexto}`}>
        {!!nome ? <div> Olá, {nome} </div> : <div>Olá!</div>}
      </div>
    </>
  );
};

export default Home;
