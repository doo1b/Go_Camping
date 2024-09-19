import { useState } from "react";
import useQuerys from "../queries/useQuerys";
import { useLocationStore } from "../store/locationStore";
import campsiteFormatter from "../utils/campsiteFormatter";

const useCampsite = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const setCampsites = useLocationStore((state) => state.setCampsites);
  const { data: campsites } = useQuerys.useGetCampsitesQuery();

  const searchCampHandler = (region) => {
    // setIsLoading(true);
    setCampsites(campsiteFormatter.formattedCampsitesData(campsites, region));
    // setIsLoading(false);
  };

  return {
    searchCampHandler,
  };
};

export default useCampsite;
