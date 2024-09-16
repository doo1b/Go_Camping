import React, { useCallback, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useLocationStore } from "../../store/locationStore";
import ReSetttingMapBounds from "./ReSetttingMapBounds";
import Marker from "./Marker";
import CustomOverlay from "./CustomOverlay";

const KakaoMap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { location, setLocation, campsite, setCampsite, campsites } =
    useLocationStore();

  console.log(campsite);

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

  const markerClickHandler = useCallback(
    (camp) => {
      setIsOpen(true);
      setLocation({
        center: {
          lat: camp.latlng.lat,
          lng: camp.latlng.lng
        }
      });
    },
    [campsite]
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
      {campsites &&
        campsites.map((camp) => (
          <Marker
            key={camp.contentId}
            camp={camp}
            setIsOpen={setIsOpen}
            setCampsite={setCampsite}
            markerClickHandler={markerClickHandler}
          />
        ))}
      {isOpen && campsite && (
        <CustomOverlay campsite={campsite} setIsOpen={setIsOpen} />
      )}
      <ReSetttingMapBounds points={campsites} />
    </Map>
  );
};

export default KakaoMap;
