import FacilitiesInfo from "./FacilitiesInfo";
import CampsiteEssential from "./CampsiteEssential";

const DetailInfo = ({ campsite }) => {
  return (
    <section className="flex content-start justify-between detailSection">
      <div className="w-[700px] content-center">
        <FacilitiesInfo
          title={"편의 시설"}
          facilities1={campsite?.caravInnerFclty}
          facilities2={campsite?.glampInnerFclty}
        />
        <hr className="w-[700px] my-5" />
        <FacilitiesInfo
          title={"부대 시설"}
          facilities1={campsite?.sbrsCl}
          facilities2={campsite?.sbrsEtc}
        />
      </div>
      <div className="w-[350px] content-center">
        <CampsiteEssential campsite={campsite} />
      </div>
    </section>
  );
};

export default DetailInfo;
