import React, { useCallback } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useLocationStore } from "../../store/locationStore";

const KakaoMap = () => {
  const { location, setLocation } = useLocationStore();

  // 지도 Drag 이벤트
  const changeCurrentLocation = useCallback(
    (map) => {
      const latlng = map.getCenter();

      setLocation({
        center: {
          lat: latlng.getLat(),
          lng: latlng.getLng()
        }
      });
    },
    [setLocation]
  );

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
