import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { getCampsites } from "../api/campSite";

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

// 캠핑장 데이터 가져오기
const useGetCampsitesQuery = () => {
  return useQuery({
    queryKey: ["campsites"],
    queryFn: () => getCampsites(),
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });
};

const useQuerys = {
  useGetCoordRegionCodeQuery,
  useGetTodayWeatherQuery,
  useGetWeeklyWeatherQuery,
  useGetCampsitesQuery
};

export default useQuerys;
