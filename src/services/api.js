import { auth } from "../api/axios";
const COORD_URL = import.meta.env.VITE_COORD_URL;

const getCoordRegioncode = async (lat, lng) => {
  const response = await auth(`${COORD_URL}?x=${lng}&y=${lat}`);
  const regionCode = {
    depth_1: response.data.documents[0].region_1depth_name,
    depth_2: response.data.documents[0].region_2depth_name,
    // depth_3: response.data.documents[0].region_3depth_name
  };
  return regionCode;
};

const api = {
  getCoordRegioncode
};

export default api;
