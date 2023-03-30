import { Icon } from "@iconify/react";
import DamIcon from "@iconify/icons-flat-color-icons/dam";
import { useState } from "react";
import InfoWindow from "./InfoWindow"
import { barragens } from "../monks/barragens";

const Marker = ({ text }) => {
  const [width, setWidth] = useState("15%");
  const [showInfo, setShowInfo] = useState("true");
  const [infoPosition, setInfoPosition] = useState("lt: 0, lng: 0");

  const handleMarkerClick = ({ lat, lng }) => {
    setInfoPosition({ lat, lng });
    setShowInfo(true);
  };


  return (
    <div className="marker">
      <Icon
        icon={DamIcon}
        width={width}
        onMouseEnter={() => setWidth("20%")}
        onMouseLeave={() => setWidth("15%")}
        onclick={() => 
          handleMarkerClick({
            lat: barragens.localizacao?.latitude,
            lng: barragens.localizacao?.longitude,
          })
        }

      />
      <p className="marker-text">{text} </p>
      {
      <InfoWindow
      barragem={barragens}
      showInfo={showInfo}
      setShowInfo={setShowInfo}
      infoPosition={infoPosition}
      />
      } 
    </div>
  );
};

export default Marker;
