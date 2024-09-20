import DetailPageTitle from "../../components/detailpage/DetailPageTitle";
import DetailPageBody from "../../components/detailpage/DetailPageBody";
import { useLocationStore } from "../../store/locationStore";

const DetailPage = () => {
  const { campsite } = useLocationStore();

  return (
    <>
      <DetailPageTitle campsite={campsite} />
      <DetailPageBody campsite={campsite} />
    </>
  );
};

export default DetailPage;
