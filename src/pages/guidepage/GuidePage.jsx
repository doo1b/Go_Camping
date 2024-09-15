<<<<<<< HEAD
import Layout from "../../components/Layout";

const GuidePage = () => {
  return <Layout />;
=======
import GuideCategory from "../../components/guidepage/GuideCategory";
import Modal from "../../components/guidepage/Modal";
import ModalOverlay from "../../components/guidepage/ModalOverlay";
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
>>>>>>> a2d2528102b4eaf52d218b5deee0a31a992dcce1
};

export default GuidePage;
