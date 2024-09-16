import React, { useCallback, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useLocationStore } from "../../store/locationStore";
import ReSetttingMapBounds from "./ReSetttingMapBounds";
import Marker from "./Marker";
import CustomOverlay from "./CustomOverlay";
import { useKakaoMap } from "../../hooks/useKakaoMap";

const KakaoMap = () => {
  const {
    isOpen,
    setIsOpen,
    location,
    campsite,
    setCampsite,
    campsites,
    changeCurrentLocation,
    markerClickHandler
  } = useKakaoMap();

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
