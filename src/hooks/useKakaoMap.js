import { useCallback, useEffect } from "react";
import kakaoService from "../services/kakaoService";
import { useLocationStore } from "../store/locationStore";

export const useKakaoMap = () => {
  const setLocation = useLocationStore((state) => state.setLocation);

  // 현재 위치 가져오기
  const getCurrentLocation = useCallback(() => {
    kakaoService.getCurrentLocation(setLocation);
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {
    getCurrentLocation
  };
};
