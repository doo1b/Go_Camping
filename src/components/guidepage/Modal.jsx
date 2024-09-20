import YouTube from "react-youtube";
import useGuideStore from "../../store/guideStore";

const Modal = () => {
  const { selectedVideo, modalClose } = useGuideStore();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-center justify-center p-8 pb-5 bg-white w-fit h-fit rounded-2xl"
    >
      <YouTube videoId={selectedVideo} onEnd={(e) => e.target.stopVideo(0)} />{" "}
      <p className="modalCloseBtn" onClick={modalClose}>
        닫기
      </p>
    </div>
  );
};

export default Modal;
