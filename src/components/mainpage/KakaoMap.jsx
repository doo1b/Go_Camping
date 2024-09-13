import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = ({ location, setLocation }) => {

  // 지도 Drag 이벤트
  const changeCurrentLocation = (map) => {
    const latlng = map.getCenter();

    setLocation((prev) => ({
      ...prev,
      center: {
        lat: latlng.getLat(),
        lng: latlng.getLng()
      }
    }));
  };

  return (
    <Map
      id="map"
      center={location.center}
      isPanto={location.isPanto}
      className="w-[100vw] h-[100vh] relative"
      level={3}
      onDragEnd={changeCurrentLocation}
    >
      <MapMarker position={location.position}></MapMarker>
    </Map>
  );
};

export default KakaoMap;
