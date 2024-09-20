import { useState } from "react";
import useQuerys from "../queries/useQuerys";
import { useLocationStore } from "../store/locationStore";
import campsiteFormatter from "../utils/campsiteFormatter";

const useCampsite = () => {
  const setCampsites = useLocationStore((state) => state.setCampsites);
  const { data: campsites, isPending } = useQuerys.useGetCampsitesQuery();

  const searchCampHandler = (region) => {
    setCampsites(campsiteFormatter.formattedCampsitesData(campsites, region));
  };

  return {
    searchCampHandler,
    isPending
  };
};

export default useCampsite;
