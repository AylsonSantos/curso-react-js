import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const DEFAULT_ZOOM = 8;
const DEFAULT_CENTER = {
  lat: -8.470697,
  lng: -38.371057,
};

const Mapa = ({listaBarragens}) => {
   
  return (
    <div className="google-map">
      <GoogleMapReact
        boostrapURLKeys={{ key: "" }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
      >
        {listaBarragens?.map((barragem, indice) => {
          return (
            <Marker 
            lat={barragem.localizacao.latitude}
            lng={barragem.localizacao.longitude}
            text={barragem.nome}
            key={indice}
            />
          )
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Mapa;
