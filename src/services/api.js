import { auth, weatherApi } from "../api/axios";
const COORD_URL = import.meta.env.VITE_COORD_URL;
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const getCoordRegioncode = async (lat, lng) => {
  try {
    const response = await auth(`${COORD_URL}?x=${lng}&y=${lat}`);
    return response.data;
  } catch (error) {
    console.error(`${error} : 행정구역 정보를 가져오지 못했습니다.`);
  }
};

const getTodayWeather = async (lat, lng) => {
  try {
    const response = await weatherApi(
      `weather?lat=${lat}&lon=${lng}&lang=kr&units=metric&appid=${WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(`${error} : 오늘 날씨 정보를 가져오지 못했습니다.`);
  }
};

const getWeeklyWeather = async (lat, lng) => {
  try {
    const response = await weatherApi(
      `forecast?lat=${lat}&lon=${lng}&lang=kr&units=metric&appid=${WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(`${error} : 이번주 날씨 정보를 가져오지 못했습니다.`);
  }
};

const api = {
  getCoordRegioncode,
  getTodayWeather,
  getWeeklyWeather
};

export default api;
