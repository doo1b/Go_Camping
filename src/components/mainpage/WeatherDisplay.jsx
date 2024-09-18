import React, { useCallback, useState } from "react";
import WeatherLocation from "../../assets/WeatherLocation";
import { useWeather } from "../../hooks/useWeather";
import WeatherIcon from "../../assets/WeatherIcon";

const WeatherDisplay = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { regionCode, isPending, currentWeather, weeklyWeather } = useWeather();

  const handleMouseToggle = useCallback(() => {
    setIsHovered((prev) => !prev);
  }, []);

  if (isPending) return <h2>데이터가 없습니다.</h2>;

  return (
    <>
      <div
        className="w-[255px] h-[45px] flex justify-between items-center px-4 z-10 rounded-full shadow-mainBoxShadow bg-white fixed top-[22px] left-[50%] transform translate-x-[-50%]"
        onMouseEnter={handleMouseToggle}
        onMouseLeave={handleMouseToggle}
      >
        <div className="flex justify-center items-center">
          <WeatherLocation />
          <div className="pl-2">{`${regionCode.depth_1} ${regionCode.depth_2}`}</div>
        </div>
        {currentWeather && (
          <div className="flex justify-center items-center">
            <WeatherIcon url={currentWeather.weather_icon} />
            <div className="font-preten700 text-lg pl-2">
              {currentWeather.temp_max ?? "-"}º
            </div>
          </div>
        )}
      </div>
      {isHovered && (
        <div className="w-[255px] h-[200px] fixed flex justify-between items-center rounded-2xl flex-col p-4 z-10 shadow-mainBoxShadow bg-background40 backdrop-blur-md top-[75px] left-[50%] transform translate-x-[-50%] transition-all duration-300">
          {weeklyWeather &&
            weeklyWeather.map((weather, index) => (
              <div
                key={index}
                className="w-[180px] h-full flex justify-between items-center flex-row text-white"
              >
                <div className="text-sm flex-1">{weather.dt}</div>
                <WeatherIcon url={weather.weather_icon} className="flex-1" />
                <div className="flex flex-row justify-center items-end flex-1">
                  <div className="font-preten700 text-lg mb-[-4px]">
                    {weather.temp_max ?? "-"}º
                  </div>
                  <div className="font-preten400 text-sm pl-[4px] text-[#D8D8D8]">
                    {weather.temp_min ?? "-"}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default WeatherDisplay;
