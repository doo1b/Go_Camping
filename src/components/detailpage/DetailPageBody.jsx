import DetailImage from "./DetailImage";
import DetailInfo from "./DetailInfo";
import DetailMapSection from "./DetailMapSection";
import DetailPageTitle from "./DetailPageTitle";

const DetailPageBody = ({ campsite }) => {
  return (
    <>
      <div className="w-[1120px] mx-auto mt-6">
        <DetailImage campsite={campsite} />
      </div>
      <div className="w-[1120px] mx-auto">
        <DetailPageTitle campsite={campsite} />
        <hr className="my-5 w-[1120px] mx-auto border-1" />
        <DetailInfo campsite={campsite} />
        <hr className="my-5 w-[1120px] mx-auto border-1" />
      </div>
      <div className="w-[1120px] mx-auto">
        <DetailMapSection campsite={campsite} />
      </div>
    </>
  );
};

export default DetailPageBody;
