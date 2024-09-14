import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const useGetCoordRegionCodeQuery = ({ lat, lng }) => {
  return useQuery({
    queryKey: ["regionCode"],
    queryFn: () => api.getCoordRegioncode(lat, lng)
  });
};

const useQuerys = {
  useGetCoordRegionCodeQuery
};

export default useQuerys;
