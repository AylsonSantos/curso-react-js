import imagem from "../../Assents/imagem_placeholder.png";
import { cursos } from "../../mocks/cursos";
import CursoCard from "../../componentes/CursoCard";
import { TemaContext } from "../../Context/TemaContext";
import { useContext, useEffect, useState } from "react";

const Cursos = () => {

  const { checked} = useContext(TemaContext);

  const [temabody, setTemaBody] = useState(checked? "light" : "dark")

  useEffect(() => {
    setTemaBody(checked ? "light" : "dark")
  }, [checked]
  )


  return (
    <div className={`bg-${temabody}`}>
      <div className="container text-center py-5">
        <div className="row">
          {cursos.map((curso, indice) => {
            return (
              <div className="col" key={indice}>
                <CursoCard
                  imagem={imagem}
                  titulo={curso.titulo}
                  texto={curso.texto}
                  rotulo={curso.rotulo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
