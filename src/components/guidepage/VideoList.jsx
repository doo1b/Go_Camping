import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useGuideStore from "../../store/guideStore";
import ModalOverlay from "./ModalOverlay";
import Modal from "./Modal";
import { useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import Loading from "../../assets/Loading";
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const VideoList = () => {
  const [searchCategory] = useSearchParams();
  const searchKeyword = searchCategory.get("category");
  const { isOpen } = useGuideStore();
  const params = {
    part: "snippet",
    q: searchKeyword,
    maxResults: 12,
    type: "video",
    regionCode: "KR",
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
    refetchOnWindowFocus: false, // 포커스 변경 시 재요청 방지
    refetchOnReconnect: false // 네트워크 재연결 시 재요청 방지
  });

  const videos = data?.map((video) => ({
    videoId: video.id.videoId,
    ...video.snippet
  }));

  if (isLoading || isPending)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-95px)]">
        <Loading />
      </div>
    );

  if (isError) return <div>에러 발생...</div>;

  return (
    <>
      <div className="pb-10 pt-14 md:px-14 xs:px-8 font-preten400">
        <span className="pb-1 border-b-2 xs:text-2xl sm:text-3xl border-campblue/50 text-campblue font-preten600">
          {searchKeyword}
        </span>
        <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(480px,1fr))] sm:gap-x-10 sm:gap-y-14 mt-12 xs:grid-cols-1 xs:gap-y-8">
          {videos?.map((video) => (
            <VideoCard video={video} key={video.videoId} />
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
