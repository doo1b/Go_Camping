import axios from "axios";
const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
const WEATHER_URL = import.meta.env.VITE_WEATHER_URL;

export const auth = axios.create({
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`
  }
});

export const weatherApi = axios.create({
  baseURL: WEATHER_URL
});