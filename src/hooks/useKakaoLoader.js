import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"
const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: `${KAKAO_API_KEY}`,
    libraries: ["clusterer", "drawing", "services"],
  })
}