import React from "react";
import Location from "../../assets/Location";

const LocationDisplay = ({getCurrentLocation}) => {
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
