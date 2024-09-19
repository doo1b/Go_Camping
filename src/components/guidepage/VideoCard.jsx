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
        key={`${video.title}-${video.channelId}`}
        onClick={() => {
          modalOpen(), setSelectedVideo(video.videoId);
        }}
        className="flex flex-col w-[480px] cursor-pointer hover:scale-105 duration-100"
      >
        <img
          src={video.thumbnails.high.url}
          className=" rounded-lg h-[260px] object-cover"
        />
        <div className="flex flex-col justify-start h-full pr-1">
          <p className="my-3 text-xl text-justify text-wrap font-preten700 text-overflow">
            {decodeHtmlEntities(video.title)}
          </p>
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
