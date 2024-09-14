import axios from "axios";
import useGuideStore from "../../zustand/guide";
import { useQuery } from "@tanstack/react-query";
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const Modal = () => {
  const { searchKeyword } = useGuideStore();
  const params = {
    part: "snippet",
    q: searchKeyword,
    maxResults: 8,
    type: "video",
    key: YOUTUBE_API_KEY
  };

  const getYoutubeData = async () => {
    const response = axios.get("https://www.googleapis.com/youtube/v3/search", {
      params
    });
    return (await response).data.items;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["youtube", searchKeyword],
    queryFn: getYoutubeData,
    staleTime: 1000 * 60 * 60 * 12, // 할당량 최적화를 위해 12시간 동안 유지
    enabled: !!searchKeyword
  });

  console.log(data);

  if (isLoading) return <div>로딩중...</div>;

  if (isError) return <div>에러 발생...</div>;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-4/5 max-w-5xl bg-white h-4/5 rounded-2xl"
    ></div>
  );
};

export default Modal;
