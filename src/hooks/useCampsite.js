import useQuerys from "../queries/useQuerys";
import { useLocationStore } from "../store/locationStore";
import campsiteFormatter from "../utils/campsiteFormatter";

const useCampsite = () => {
  const setCampsites = useLocationStore((state) => state.setCampsites);
  const { data: campsites } = useQuerys.useGetCampsitesQuery();

  const searchCampHandler = (region) => {
    setCampsites(campsiteFormatter.formattedCampsitesData(campsites, region));
  };

  return {
    searchCampHandler
  };
};

export default useCampsite;
