import GuideCategory from "../../components/guidepage/GuideCategory";
import Modal from "../../components/guidepage/Modal";
import ModalOverlay from "../../components/guidepage/ModalOverlay";
import useGuideStore from "../../zustand/guide";

const GuidePage = () => {
  const { isOpen } = useGuideStore();

  return (
    <>
      <GuideCategory />
      {isOpen && (
        <ModalOverlay>
          <Modal />
        </ModalOverlay>
      )}
    </>
  );
};

export default GuidePage;
