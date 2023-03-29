import { useContext } from "react";
import { Link} from "react-router-dom";
import { TemaContext } from "../Context/TemaContext";

const Cabecalho = () => {


  const {checked, setChecked, tema} = useContext(TemaContext)

    return (
        <nav className={`navbar navbar-expand-sm  bg-${tema}`} data-bs-theme={tema}>
  <div className="container-fluid px-5">
    <Link className="navbar-brand" to="/">Treina Recife</Link>
    <div class="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => {
    setChecked(!checked)

  }}
  checked={checked}
  />
 
</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link  className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cursos">Curso</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Consultoria">Consultoria</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Digite sua busca..."/>
        <button class="btn btn-primary" type="button">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Cabecalho;