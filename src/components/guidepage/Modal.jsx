import VideoList from "./VideoList";

const Modal = () => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-4/5 max-w-5xl bg-white h-4/5 rounded-2xl  p-5 flex flex-col items-center"
    >
      <VideoList />
    </div>
  );
};

export default Modal;
