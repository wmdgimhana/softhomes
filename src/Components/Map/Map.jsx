import React from "react";
import MapImg from "../../assets/map.png";
import MapImg2 from "../../assets/map2.png";
import "./Map.scss";

const Map = () => {
  return (
    <div className="map">
      <div className="wrapper">
        <img src={MapImg} alt="map" className="map" />
        <img src={MapImg2} alt="map" className="back" />
      </div>
    </div>
  );
};

export default Map;
