// 행정구역 포멧
const formattedRegionCode = (regionCodeData) => {
  const regionCode = {
    depth_1: regionCodeData?.documents[0].region_1depth_name,
    depth_2: regionCodeData?.documents[0].region_2depth_name
  };

  return regionCode;
};

// 오늘 날씨 데이터 포멧
const formattedTodayWeatherData = (weatherData) => {
  const currentWeather = {
    temp_max: weatherData?.main.temp_max.toFixed(0),
    weather_icon: weatherData?.weather[0].icon
  };

  return currentWeather
}

// 이번주 날씨 데이터 포멧
const formattedWeeklyWeatherData = (weatherData) => {
  const daysOfWeek = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ];

  const everyDays = weatherData?.list.map((item) => item.dt_txt.substr(0, 10));
  const days = [...new Set(everyDays)].splice(1, 6);

  const weeklyWeather = days?.map((day) => {
    // 요일별 데이터 가져오기
    const dataForDay = weatherData?.list?.filter((item) => item.dt_txt.includes(day));
    // 요일별 최대 온도 값
    const maxTemp = Math.max(...dataForDay.map((item) => item.main.temp_max));
    // 요일별 최대 온도 날씨 아이콘
    const maxTempIcon = dataForDay?.find((item) => item.main.temp_max === maxTemp);
    // 요일별 최소 온도 값
    const minTemp = Math.min(...dataForDay.map((item) => item.main.temp_min));

    return {
      dt: daysOfWeek[new Date(day).getDay()],
      temp_max: maxTemp.toFixed(0),
      temp_min: minTemp.toFixed(0),
      weather_icon: maxTempIcon?.weather[0]?.icon
    };
  });

  return weeklyWeather
};

const weatherFormatter = {
  formattedRegionCode,
  formattedTodayWeatherData,
  formattedWeeklyWeatherData
};

export default weatherFormatter;
