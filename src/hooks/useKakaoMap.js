import { useCallback, useEffect, useState } from "react";
import kakaoService from "../services/kakaoService";
import { useLocationStore } from "../store/locationStore";

export const useKakaoMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { location, setLocation, campsite, setCampsite, campsites } =
    useLocationStore();

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

  // 마커 클릭 이벤트
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

  // 현재 위치 가져오기
  const getCurrentLocation = useCallback(() => {
    kakaoService.getCurrentLocation(setLocation);
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {
    isOpen,
    setIsOpen,
    location,
    campsite,
    setCampsite,
    campsites,
    getCurrentLocation,
    changeCurrentLocation,
    markerClickHandler
  };
};
