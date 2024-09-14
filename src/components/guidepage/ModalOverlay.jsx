import useGuideStore from "../../zustand/guide";

const ModalOverlay = ({ children }) => {
  const { modalClose, setSearchKeyword } = useGuideStore();
  return (
    <div
      onClick={() => {
        modalClose(), setSearchKeyword("");
      }}
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/70"
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
