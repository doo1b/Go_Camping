// 행정구역 포멧
const formattedRegionCode = (regionCodeData) => {
  const regionCode = {
    depth_1: regionCodeData?.documents[0].region_1depth_name,
    depth_2: regionCodeData?.documents[0].region_2depth_name
  };

  return regionCode;
};

// 날씨 데이터 포멧
const formattedWeatherData = (weatherData) => {
  const daysOfWeek = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ];
  const timeToCheck = "09:00:00";

  const getWeatherData = (weather) => ({
    dt: daysOfWeek[new Date(weather.dt * 1000).getDay()],
    temp_max: weather.main.temp_max.toFixed(0),
    temp_min: weather.main.temp_min.toFixed(0),
    weather_icon: weather.weather[0].icon
  });

  // 현재 날씨
  const currentWeatherData = weatherData?.list[0];
  const currentWeather = {
    temp_max: currentWeatherData?.main.temp_max.toFixed(0),
    weather_icon: currentWeatherData?.weather[0].icon
  };

  // 이번주 날씨
  const weeklyWeather = weatherData?.list
    .filter((weather) => weather.dt_txt.split(" ")[1] === timeToCheck)
    .map(getWeatherData);

  return {
    currentWeather,
    weeklyWeather
  };
};

const weatherService = {
  formattedRegionCode,
  formattedWeatherData
};

export default weatherService;
