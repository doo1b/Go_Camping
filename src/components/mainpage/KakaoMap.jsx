import React, { useEffect, useRef, useState } from "react";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import ReSetttingMapBounds from "./ReSetttingMapBounds";
import Marker from "./Marker";
import CustomOverlay from "./CustomOverlay";
import { useKakaoMap } from "../../hooks/useKakaoMap";

const KakaoMap = () => {
  const mapRef = useRef(null);
  const [filteredCampsites, setFilteredCampsites] = useState([]);

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

  const onClusterclick = (_target, cluster) => {
    const map = mapRef.current;
    // 현재 지도 레벨에서 1레벨 확대한 레벨
    const level = map.getLevel() - 1;

    // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
    map.setLevel(level, { anchor: cluster.getCenter() });
  };

  // LOD에 따라 마커 필터링
  const filterCampsitesByZoomLevel = (zoomLevel) => {
    if (zoomLevel >= 11) {
      return campsites.filter((_, index) => index % 11 === 0); // 11개마다 하나씩 표시
    } else if (zoomLevel >= 10) {
      return campsites.filter((_, index) => index % 9 === 0); // 9개마다 하나씩 표시
    } else if (zoomLevel >= 9) {
      return campsites.filter((_, index) => index % 7 === 0); // 7개마다 하나씩 표시
    } else {
      return campsites;
    }
  };

  // 스크린 내에서 마커 필터링 함수
  const createElementsInScreenSize = () => {
    if (!mapRef.current) return [];

    // 지도 우상단, 좌하단 좌표값 도출
    const mapBounds = mapRef.current.getBounds();

    const zoomLevel = mapRef.current.getLevel();
    console.log(zoomLevel);

    let visibleCampsites = filterCampsitesByZoomLevel(zoomLevel);

    // 스크린의 꼭짓점 내에 해당하는 마커만 필터링
    const coordinatesInScreenSize = visibleCampsites.filter((camp) => {
      const { latlng } = camp;

      return (
        latlng.lat <= mapBounds.pa &&
        latlng.lat >= mapBounds.qa &&
        latlng.lng <= mapBounds.oa &&
        latlng.lng >= mapBounds.ha
      );
    });
    setFilteredCampsites(coordinatesInScreenSize);
  };

  useEffect(() => {
    createElementsInScreenSize(); // 맵이 로드될 때 필터링
  }, [campsites, location]); // 캠핑장 데이터나 위치가 변경될 때마다 필터링

  return (
    <Map
      id="map"
      center={location.center}
      isPanto={location.isPanto}
      className="w-[100vw] h-[100vh] relative"
      level={3}
      onDragEnd={changeCurrentLocation}
      ref={mapRef}
    >
      <MapMarker position={location.position}></MapMarker>
      <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마크 평균 위치를 클러스터 마커 위치로 설정
        minLevel={10} // 최소 지도 레벨
        disableClickZoom={true} // 클러스터 마커 클릭 시 지도 확대 x
        onClusterclick={onClusterclick}
      >
        {filteredCampsites.map((camp) => (
          <Marker
            key={camp.contentId}
            camp={camp}
            setIsOpen={setIsOpen}
            setCampsite={setCampsite}
            markerClickHandler={markerClickHandler}
          />
        ))}
      </MarkerClusterer>
      {isOpen && campsite && (
        <CustomOverlay campsite={campsite} setIsOpen={setIsOpen} />
      )}
      <ReSetttingMapBounds points={campsites} />
    </Map>
  );
};

export default KakaoMap;
