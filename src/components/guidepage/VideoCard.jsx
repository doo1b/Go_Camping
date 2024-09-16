import useGuideStore from "../../store/guideStore";

const VideoCard = ({video}) => {
    function decodeHtmlEntities(text) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        return doc.documentElement.textContent;
      }
    const {modalOpen, setSelectedVideo } = useGuideStore();
  return (
    <>
      <div
        key={`${video.title}-${video.channelId}`}
        onClick={() => {modalOpen(),
            setSelectedVideo(video.videoId)
        }}
        className="flex items-center h-[180px]"
      >
        <img src={video.thumbnails.medium.url} className="rounded-lg mr-3" />
        <div className="flex flex-col justify-around h-full">
          <p className="text-wrap font-preten600 text-xl">{decodeHtmlEntities(video.title)}</p>
          <p>{video.channelTitle}</p>
        </div>
      </div>
    </>
  );
};

export default VideoCard
