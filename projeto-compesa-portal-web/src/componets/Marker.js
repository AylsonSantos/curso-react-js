import { Icon } from "@iconify/react";
import DamIcon from "@iconify/icons-flat-color-icons/dam";
import { useState } from "react";

const Marker = ({ text }) => {
  const [width, setWidth] = useState("15%");
  return (
    <div className="marker">
      <Icon
        icon={DamIcon}
        width={width}
        onMouseEnter={() => setWidth("20%")}
        onMouseLeave={() => setWidth("15%")}
        onclick={() => {}}
      />
      <p className="marker-text">{text} </p>
    </div>
  );
};

export default Marker;
