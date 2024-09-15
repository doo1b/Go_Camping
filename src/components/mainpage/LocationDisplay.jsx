import React from "react";
import Location from "../../assets/Location";
import { useKakaoMap } from "../../hooks/useKakaoMap";

const LocationDisplay = () => {
  const { getCurrentLocation } = useKakaoMap();
  
  return (
    <button
      onClick={getCurrentLocation}
      className="fixed flex justify-center items-center rounded-full w-[48px] h-[48px] right-[1.5rem] bottom-[1.5rem] z-[999] outline-none bg-white shadow-mainBoxShadow hover:bg-gray-100"
    >
      <Location />
    </button>
  );
};

export default LocationDisplay;
