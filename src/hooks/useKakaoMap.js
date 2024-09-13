import { useEffect, useState } from "react";
import kakaoService from "../services/kakaoService";

export const useKakaoMap = () => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const fetchKakaoMap = async () => {
    const { map, locPosition } = await kakaoService.initialMap();
    setKakaoMap(map);
    setCurrentLocation(locPosition);
  };

  useEffect(() => {
    fetchKakaoMap();
  }, []);

  return {
    kakaoMap,
    currentLocation,
    setInitialLocation: kakaoService.setInitialLocation
  };
};
