import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

// 행정 구역 가져오기
const useGetCoordRegionCodeQuery = ({ lat, lng }) => {
  return useQuery({
    queryKey: ["regionCode"],
    queryFn: () => api.getCoordRegioncode(lat, lng)
  });
};

// 오늘 날씨 데이터 가져오기
const useGetTodayWeatherQuery = ({ lat, lng }) => {
  return useQuery({
    queryKey: ["todayWeather"],
    queryFn: () => api.getTodayWeather(lat, lng)
  });
};

// 이번주 날씨 데이터 가져오기
const useGetWeeklyWeatherQuery = ({ lat, lng }) => {
  return useQuery({
    queryKey: ["weeklyWeather"],
    queryFn: () => api.getWeeklyWeather(lat, lng)
  });
};

const useQuerys = {
  useGetCoordRegionCodeQuery,
  useGetTodayWeatherQuery,
  useGetWeeklyWeatherQuery
};

export default useQuerys;
