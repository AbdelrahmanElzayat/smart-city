import React from "react";
import AboutPart from "../../components/ProjectPartsComponents/aboutPart/AboutPart";
import ControlRoom from "../../components/ProjectPartsComponents/ControlRoom/ControlRoom";
import DevicesConnections from "../../components/ProjectPartsComponents/DevicesConnections/DevicesConnections";
import Camera from "../../components/ProjectPartsComponents/Camera/Camera";
import Irrigation from "../../components/ProjectPartsComponents/irrigation/Irrigation";
import SmartLight from "../../components/ProjectPartsComponents/smartLight/SmartLight";
import ScreenControl from "../../components/ProjectPartsComponents/screenControl/ScreenControl";
import Garden from "../../components/ProjectPartsComponents/garden/Garden";

const Projectparts = () => {
  return (
    <div className="Projectparts">
      <AboutPart />
      <ControlRoom />
      <DevicesConnections />
      <Camera />
      <Irrigation />
      <SmartLight />
      <ScreenControl />
      <Garden />  
    </div>
  );
};

export default Projectparts;
