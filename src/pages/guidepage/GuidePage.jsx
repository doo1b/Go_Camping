import GuideCategory from "../../components/guidepage/GuideCategory";
import Modal from "../../components/guidepage/Modal";
import ModalOverlay from "../../components/guidepage/ModalOverlay";
import Layout from "../../components/layout/Layout";
import useGuideStore from "../../store/guideStore";

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
