import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/img/header_logo.png";
import { useState, useCallback } from "react";
import WeatherLocation from "../../assets/WeatherLocation";
import { useWeather } from "../../hooks/useWeather";
import WeatherIcon from "../../assets/WeatherIcon";

const Header = () => {
  // 날씨
  // 컴
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
        <Link to="/main" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="로고 이미지 홈으로 이동" />
        </Link>
      </div>
      <div
        className="w-[255px] h-[45px] flex justify-between items-center px-4 z-10 rounded-full shadow-mainBoxShadow bg-white absolute left-1/2 transform -translate-x-1/2"
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
      <div className="flex-shrink-0 flex items-center space-x-4">
        <Link
          to="/main"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          메인 페이지로 가기
        </Link>
        <Link
          to="/guide"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          가이드 영상으로 가기
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
            className="outline-none pl-1"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
