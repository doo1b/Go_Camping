import useGuideStore from "../../store/guideStore";

const ModalOverlay = ({ children }) => {
  const { modalClose } = useGuideStore();
  return (
    <div
      onClick={modalClose
      }
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/70"
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
