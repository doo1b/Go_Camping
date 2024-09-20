import useGuideStore from "../../store/guideStore";

const VideoCard = ({ video }) => {
  function decodeHtmlEntities(text) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    return doc.documentElement.textContent;
  }
  const { modalOpen, setSelectedVideo } = useGuideStore();
  return (
    <>
      <div
        onClick={() => {
          modalOpen(), setSelectedVideo(video.videoId);
        }}
        className="flex flex-col cursor-pointer hover:scale-105 duration-100 max-w-[480px] xs:w-full xs:border-gray-300 xs:border-b-[1px] xs:pb-5 sm:border-none"
      >
        <img
          src={video.thumbnails.high.url}
          className="object-cover rounded-lg aspect-video"
        />
        <div className="flex flex-col justify-start h-full pr-1">
          <p className="videoTitle">{decodeHtmlEntities(video.title)}</p>
          <div className="flex items-end justify-between">
            <span className="text-over font-preten500">
              {video.channelTitle}
            </span>
            <span className="text-xs font-preten200">
              {video.publishTime.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
