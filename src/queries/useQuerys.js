import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

// 행정 구역 가져오기
const useGetCoordRegionCodeQuery = ({ lat, lng }) => {
  return useQuery({
    queryKey: ["regionCode"],
    queryFn: () => api.getCoordRegioncode(lat, lng)
  });
};

// 날씨 데이터 가져오기
const useGetWeeklyWeatherQuery = ({ lat, lng }) => {
  return useQuery({
    queryKey: ["weather"],
    queryFn: () => api.getWeeklyWeather(lat, lng)
  });
};

const useQuerys = {
  useGetCoordRegionCodeQuery,
  useGetWeeklyWeatherQuery
};

export default useQuerys;
