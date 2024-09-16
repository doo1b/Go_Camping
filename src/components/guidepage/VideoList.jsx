import axios from "axios";
import useGuideStore from "../../store/guideStore";
import { useQuery } from "@tanstack/react-query";
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const VideoList = () => {
  const { searchKeyword } = useGuideStore();
  const params = {
    part: "snippet",
    q: searchKeyword,
    maxResults: 10,
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
    enabled: !!searchKeyword
  });

  const videos = data?.map((dataObj) => dataObj.snippet);
  console.log(videos);

  if (isLoading || isPending) return <div>로딩중...</div>;

  if (isError) return <div>에러 발생...</div>;

  return (
    <>
      <div className="h-full w-full overflow-scroll">
        {videos?.map((video) => (
          <div key={`${video.title}-${video.channelId}`}>
            <img src={video.thumbnails.default.url} />
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoList;
