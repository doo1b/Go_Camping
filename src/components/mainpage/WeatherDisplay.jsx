import React, { useEffect } from "react";
import WeatherLocation from "../../assets/WeatherLocation";
import Sun from "../../assets/Sun";
import useQuerys from "../../queries/useQuerys";
import { useLocationStore } from "../../store/locationStore";

const WeatherDisplay = () => {
  const { center } = useLocationStore((state) => state.location);
  const {data, isPending, refetch} = useQuerys.useGetCoordRegionCodeQuery(center);
  
  useEffect(() => {
    if(center){
      refetch();
    }
  }, [center])

  console.log(data)
  if(isPending) return <h2>데이터가 없습니다.</h2>
  return (
    <div className="w-[255px] h-[45px] flex justify-between items-center px-4 z-10 rounded-full shadow-mainBoxShadow bg-white fixed top-[22px] left-[50%] transform translate-x-[-50%]">
      <div className="flex justify-center items-center">
        <WeatherLocation />
        <div className="pl-2">{`${data.depth_1} ${data.depth_2}`}</div>
      </div>
      <div className="flex justify-center items-center">
        <Sun />
        <div className="font-preten700 text-lg pl-2">22º</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
