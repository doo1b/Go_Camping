import { useEffect, useMemo } from "react";
import useQuerys from "../queries/useQuerys";
import weatherService from "../services/weatherService";
import { useLocationStore } from "../store/locationStore";

export const useWeather = () => {
  const { center } = useLocationStore((state) => state.location);

  const { data: regionCodeData, isPending, refetch: refetchRegionCode  } = useQuerys.useGetCoordRegionCodeQuery(center);
  const { data: weatherData, refetch: refetchWeather  } = useQuerys.useGetWeeklyWeatherQuery(center);
  
  const regionCode = useMemo(() => weatherService.formattedRegionCode(regionCodeData), [regionCodeData]);
  const {currentWeather, weeklyWeather} = useMemo(() =>weatherService.formattedWeatherData(weatherData), [weatherData]);

  useEffect(() => {
    if (center) {
      refetchRegionCode();
      refetchWeather();
    }
  }, [center]);

  return {
    regionCode,
    isPending,
    currentWeather,
    weeklyWeather
  }
};
