import React from "react";
import { MapMarker, useMap } from "react-kakao-maps-sdk";

const Marker = ({ camp, setIsOpen, setCampsite, markerClickHandler }) => {
  const map = useMap();
  return (
    <MapMarker
      key={camp.contentId}
      position={camp.latlng}
      onClick={(marker) => {
        setIsOpen((prev) => !prev);
        setCampsite(camp);
        map.panTo(marker.getPosition())
        markerClickHandler(camp)
      }}
      image={{
        src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
        size: {
          width: 24,
          height: 35
        }
      }}
      title={camp.facltNm}
    ></MapMarker>
  );
};

export default Marker;
