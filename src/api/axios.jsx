import axios from "axios";
const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;

export const auth = axios.create({
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`
  }
});
