import { useEffect, useState } from "react";
import kakaoService from "../services/kakaoService";

export const useKakaoMap = () => {
  const [location, setLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667
    },
    position: {
      lat: 33.450701,
      lng: 126.570667
    },
    isPanto: true,
    errMsg: null,
    isLoading: true
  });

  const getCurrentLocation = () => {
    kakaoService.getCurrentLocation(setLocation);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {
    location,
    setLocation,
    getCurrentLocation
  };
};
