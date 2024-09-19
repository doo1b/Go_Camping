import YouTube from "react-youtube";
import useGuideStore from "../../store/guideStore";

const Modal = () => {
  const { selectedVideo } = useGuideStore();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-center justify-center p-10 bg-white w-fit h-fit rounded-2xl"
    >
      <YouTube videoId={selectedVideo} onEnd={(e) => e.target.stopVideo(0)} />
    </div>
  );
};

export default Modal;
