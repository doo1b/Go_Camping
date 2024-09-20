import axios from "axios";

const GOCAMPING_KEY = import.meta.env.VITE_GOCAMPING_KEY;
const GO_CAMP_URL = "https://apis.data.go.kr/B551011/GoCamping/basedList";
const DB_JSON_URL = import.meta.env.VITE_DB_JSON_URL;

const getTotalCount = async () => {
  const response = await axios.get(
    `${GO_CAMP_URL}?numOfRows=1&pageNo=1&MobileOS=ETC&MobileApp=gocamping&serviceKey=${GOCAMPING_KEY}&_type=Json`
  );
  return response.data.response.body.totalCount;
};

export const postCampSites = async () => {
  const length = await getTotalCount();
  const response = await axios.get(
    `${GO_CAMP_URL}?numOfRows=${length}&pageNo=1&MobileOS=ETC&MobileApp=gocamping&serviceKey=${GOCAMPING_KEY}&_type=Json`
  );
  const campsiteList = response.data.response.body.items.item;
  console.log(Array.isArray(campsiteList));
  await axios.post(
    `${DB_JSON_URL}`,
    JSON.stringify({ campsiteList }, null, 2),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
