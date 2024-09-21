import DetailPageLogo from "../../assets/DetailPageLogo";
import DetailInfo from "./DetailInfo";
import DetailMapSection from "./DetailMapSection";

const DetailPageBody = ({ campsite }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10">
        <section className="detailSection w-[600px]">
          <>
            {campsite?.firstImageUrl !== "" ? (
              <img src={campsite?.firstImageUrl} className="rounded-2xl" />
            ) : (
              <DetailPageLogo />
            )}
          </>
        </section>
        <DetailInfo campsite={campsite} />
      </div>
      <div className="w-[600px] mt-10 mx-auto">
        <DetailMapSection campsite={campsite} />
      </div>
    </>
  );
};

export default DetailPageBody;
