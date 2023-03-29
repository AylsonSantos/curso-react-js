import Header from "./componets/Header";
import Footer from "./componets/Footer";
import DropdownFilter from "./componets/DropdownFilter";
import SearchBar from "./componets/SearchBar";
import { categorias } from "./monks/Categorias";
import { danoExponecial } from "./monks/danoExponencial";
import Home from "./paginas";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <SearchBar />
          </div>
          <div className="col-sm">
            <DropdownFilter options={categorias} />
          </div>
          <div className="col-sm">
            <DropdownFilter options={danoExponecial} />
          </div>
        </div>
      </div>
      <Home />
      <Footer />
    </>
  );
};

export default App;
