//import { Link } from "react-router-dom";
import logo from "../assets/sasb_compesa_logo.png";
import { categorias } from "../monks/Categorias";
import { danoExponecial } from "../monks/danoExponencial";
import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";

const NavBar = ({setBusca, setRisco, setDano}) => {
  return (
    <div className="container-fluid sasb-navbar">
      <div className="row py-4">
        <div className="col-lg-3 col-md-12 d-flex justify-content-center">
          <a className="navbar-brand" href="/">
            <img className="sasb-logo-navbar" src={logo} alt="SASB-COMPESA" />
          </a>
        </div>

        <div className="col-lg-3 col-md-12">
          <SearchBar 
          placeholder={"Digite o nome da Barragem"}
          setBusca={setBusca}
          />
        </div>

        <div className="col-lg-2 col-md-12">
          <DropdownFilter
          label={"Filtrar por Risco"}
            options={categorias}
            setFilter={setRisco}
          />
        </div>

        <div className="col-lg-2 col-md-12">
          <DropdownFilter
          label={"Filtar por dano"}
            options={danoExponecial}
            setFilter={setDano}
          />
        </div>

        <div className="col-lg-2 col-md-12">
        <button className="btn btn-lg btn-sasb-blue sasb-shadow">
              ÁREA DO COLABORADOR
            </button>
        {/* <Link to={"/login"}>
            <button className="btn btn-lg btn-sasb-blue sasb-shadow">
              ÁREA DO COLABORADOR
            </button>
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;