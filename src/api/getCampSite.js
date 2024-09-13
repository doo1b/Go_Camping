import axios from "axios";

const GO_CAMP_URL = "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=gocamping&serviceKey=ym%2BF8SN69q6JARv8vcXBG6fYN57a%2Ffy5Q%2Fv0U5frlLS0DFWPEQqMRZC3OFM%2B%2F5b%2BRccx4Xgo04IcanY%2B6b2PEw%3D%3D&_type=Json";
const DB_JSON_URL = "http://localhost:5000/campsiteList";

export const postCampSites = async () => {
  const response = await axios.get(`${GO_CAMP_URL}`);
  const campsiteList = response.data.response.body.items.item;
  campsiteList.map(async (campsite) => {
    await axios.post(`${DB_JSON_URL}`, campsite);
  })
}