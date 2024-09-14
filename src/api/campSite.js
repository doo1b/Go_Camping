import axios from "axios";

const DB_JSON_URL = "http://localhost:5000/campsiteList";

export const getOneCampsite = async (contentId) => {
  const response = await axios.get(`${DB_JSON_URL}?contentId=${contentId.contentId}`);
  return response.data;
}