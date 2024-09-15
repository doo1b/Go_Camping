import { useEffect, useMemo } from "react";
import useQuerys from "../queries/useQuerys";
import weatherFormatter from "../utils/weatherFormatter";
import { useLocationStore } from "../store/locationStore";

export const useWeather = () => {
  const { center } = useLocationStore((state) => state.location);

  const { data: regionCodeData, isPending, refetch: refetchRegionCode } = useQuerys.useGetCoordRegionCodeQuery(center);
  const { data: todayWeatherData, refetch: refetchTodayWeather } = useQuerys.useGetTodayWeatherQuery(center);
  const { data: weeklyWeatherData, refetch: refetchWeeklyWeather } = useQuerys.useGetWeeklyWeatherQuery(center);
 
  const regionCode = useMemo(() => weatherFormatter.formattedRegionCode(regionCodeData), [regionCodeData]);
  const currentWeather = useMemo(() =>weatherFormatter.formattedTodayWeatherData(todayWeatherData), [todayWeatherData]);
  const weeklyWeather = useMemo(() =>weatherFormatter.formattedWeeklyWeatherData(weeklyWeatherData), [weeklyWeatherData]);

  useEffect(() => {
    if (center) {
      refetchRegionCode();
      refetchTodayWeather();
      refetchWeeklyWeather();
    }
  }, [center]);

  return {
    regionCode,
    isPending,
    currentWeather,
    weeklyWeather
  }
};
