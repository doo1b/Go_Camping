import axios from "axios";

const DB_JSON_URL = "http://localhost:5000/campsiteList";

export const getTotalCount = async () => {
  const response = await axios.get(`${DB_JSON_URL}?_page=1&_per_page=1`)
  return response.data;
}

export const getCampsites = async () => {
  const response = await axios.get(`${DB_JSON_URL}`);
  return response.data[0].campsiteList;
}

export const getOneCampsite = async (contentId) => {
  console.log(contentId);
  const data = await getCampsites();
  return data.filter((campsite) => campsite.contentId === contentId.contentId);
}

export const deleteOneCampsite = async (id) => {
  const response = await axios.delete(`${DB_JSON_URL}/${id}`)
  return response.data;
}