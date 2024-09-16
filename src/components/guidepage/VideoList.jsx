import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useGuideStore from "../../store/guideStore";
import ModalOverlay from "./ModalOverlay";
import Modal from "./Modal";
import { useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const VideoList = () => {
  const [searchCategory] = useSearchParams();
  const searchKeyword = searchCategory.get("category");
  const {  isOpen } = useGuideStore();
  const params = {
    part: "snippet",
    q: searchKeyword,
    maxResults: 12,
    type: "video",
    key: YOUTUBE_API_KEY
  };

  const getYoutubeData = async () => {
    const response = axios.get("https://www.googleapis.com/youtube/v3/search", {
      params
    });
    return (await response).data.items;
  };

  const { data, isLoading, isError, isPending } = useQuery({
    queryKey: ["youtube", searchKeyword],
    queryFn: getYoutubeData,
    staleTime: 1000 * 60 * 60 * 12, // 할당량 최적화를 위해 12시간 동안 유지
    cacheTime: 1000 * 60 * 60 * 12,
    enabled: !!searchKeyword && searchKeyword.trim() !== "", // 검색어가 있을 때만 쿼리 실행
    refetchOnWindowFocus: false,     // 포커스 변경 시 재요청 방지
    refetchOnReconnect: false,       // 네트워크 재연결 시 재요청 방지
  });

  const videos = data?.map((video) => ({
    videoId: video.id.videoId,
    ...video.snippet
  }));

  if (isLoading || isPending) return <div>로딩중...</div>;

  if (isError) return <div>에러 발생...</div>;

  return (
    <>
      <div className="font-preten400 py-10 px-16">
          <span className="border-b-2 border-campblue/50 text-campblue text-3xl font-preten600 pb-2">
            {searchKeyword}
          </span>
        <div className="flex flex-col gap-y-6 mt-10">
          {videos?.map((video) => (
           <VideoCard video={video} key={video.videoId}/>
          ))}
        </div>
        {isOpen && (
          <ModalOverlay>
            <Modal />
          </ModalOverlay>
        )}
      </div>
    </>
  );
};

export default VideoList;
