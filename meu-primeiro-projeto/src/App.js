import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./paginas/Home";
import Consultoria from "./paginas/Consultoria";
import Cursos from "./paginas/Cursos";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Login from "./paginas/Login";
import TemaProvider from "./Context/TemaContext";

const App = () => {
  return (
    <TemaProvider>
    <BrowserRouter>
    <Cabecalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/Consultoria" element={<Consultoria />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Rodape />
    </BrowserRouter>
    </TemaProvider>
      
  );
}

export default App;
