import YouTube from "react-youtube";
import useGuideStore from "../../store/guideStore";

const Modal = () => {
  const { selectedVideo } = useGuideStore();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-center justify-center w-4/5 max-w-5xl p-5 bg-white h-4/5 rounded-2xl"
    >
      <YouTube videoId={selectedVideo} onEnd={(e) => e.target.stopVideo(0)} />
    </div>
  );
};

export default Modal;
