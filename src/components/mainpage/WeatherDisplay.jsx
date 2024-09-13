import React from "react";
import WeatherLocation from "../../assets/WeatherLocation";
import Sun from "../../assets/Sun";

const WeatherDisplay = () => {
  return (
    <div className="w-[255px] h-[45px] flex justify-between items-center px-4 z-10 rounded-full shadow-mainBoxShadow bg-white fixed top-[22px] left-[50%] transform translate-x-[-50%]">
      <div className="flex justify-center items-center">
        <WeatherLocation />
        <div className="pl-2">서울특별시</div>
      </div>
      <div className="flex justify-center items-center">
        <Sun />
        <div className="font-preten700 text-lg pl-2">22º</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
