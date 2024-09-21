import DetailInfo from "./DetailInfo";
import DetailMapSection from "./DetailMapSection";
import DetailPageTitle from "./DetailPageTitle";

const DetailPageBody = ({ campsite }) => {
  return (
    <>
      <div className="w-[1120px] mx-auto mt-6">
        <section className="content-center detailSection">
          <>
            {campsite?.firstImageUrl !== "" ? (
              <img
                src={campsite?.firstImageUrl}
                className="object-cover object-bottom w-[1120px] aspect-video rounded-2xl"
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1496947850313-7743325fa58c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover object-bottom w-[1120px] aspect-video rounded-2xl"
              />
            )}
          </>
        </section>
      </div>
      <div className="w-[1120px] mx-auto">
        <DetailPageTitle campsite={campsite} />
        <hr className="my-5 w-[1120px] mx-auto border-1" />
        <DetailInfo campsite={campsite} />
      </div>

      <hr className="my-5 w-[1120px] mx-auto border-1" />

      <div className="w-[1120px] mx-auto">
        <DetailMapSection campsite={campsite} />
      </div>
    </>
  );
};

export default DetailPageBody;
