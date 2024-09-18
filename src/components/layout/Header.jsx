import React from "react";
import logo from "../../../src/assets/header/header_logo.png";
import place from "../../../src/assets/header/header_place.png";
import guide from "../../../src/assets/header/header_guide.png";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import WeatherLocation from "../../assets/WeatherLocation";
import { useWeather } from "../../hooks/useWeather";
import WeatherIcon from "../../assets/WeatherIcon";

const Header = () => {
  // 날씨창 공간 확장 / 날씨 컴포넌트 분리하기
  const [isHovered, setIsHovered] = useState(false);
  const { regionCode, isPending, currentWeather, weeklyWeather } = useWeather();

  const handleMouseToggle = useCallback(() => {
    setIsHovered((prev) => !prev);
  }, []);

  const [searchForm, setSearchForm] = useState("");
  const submitSearchForm = (e) => {
    e.preventDefault();
  };
  return (
    <header className="bg-campblue p-4 flex items-center justify-between sticky top-0 z-50 h-[95px]">
      <div className="flex-shrink-0">
        <Link to="/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="로고 이미지 홈으로 이동" />
        </Link>
      </div>
      <div
        className="w-[255px] h-[45px] flex justify-between items-center px-4 z-10 rounded-full shadow-mainBoxShadow bg-white absolute left-1/2 transform -translate-x-1/2"
        onMouseEnter={handleMouseToggle}
        onMouseLeave={handleMouseToggle}
      >
        <div className="flex items-center justify-center">
          <WeatherLocation />
          <div className="pl-2">{`${regionCode.depth_1} ${regionCode.depth_2}`}</div>
        </div>
        {currentWeather && (
          <div className="flex items-center justify-center">
            <WeatherIcon url={currentWeather.weather_icon} />
            <div className="pl-2 text-lg font-preten700">
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
                <div className="flex-1 text-sm">{weather.dt}</div>
                <WeatherIcon url={weather.weather_icon} className="flex-1" />
                <div className="flex flex-row items-end justify-center flex-1">
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
      <div className="flex items-center flex-shrink-0 space-x-4">
        <Link
          to="/main"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          <img src={place} alt="지도로 가기" />
        </Link>
        <Link
          to="/guide"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          <img src={guide} alt="지도로 가기" />
        </Link>
        <form
          onSubmit={submitSearchForm}
          className="w-[255px] h-[45px] flex justify-between items-center px-4 z-10 rounded-full shadow-mainBoxShadow bg-white"
        >
          <input
            type="text"
            value={searchForm}
            onChange={(e) => setSearchForm(e.target.value)}
            placeholder="캠핑장을 검색해 보세요!"
            className="pl-1 outline-none"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
