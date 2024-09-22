import DetailPageBody from "../../components/detailpage/DetailPageBody";
import { useLocationStore } from "../../store/locationStore";

const DetailPage = () => {
  const { campsite } = useLocationStore();

  return (
    <>
      <DetailPageBody campsite={campsite} />
    </>
  );
};

export default DetailPage;
