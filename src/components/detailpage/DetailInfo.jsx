import { Link } from "react-router-dom";
import AmenitiesInfo from "./AmenitiesInfo";
import FacilityInfo from "./FacilityInfo";

const DetailInfo = ({ campsite }) => {
  return (
    <section className="detailSection">
      <>
        {campsite?.lineIntro && (
          <h4 className="detailCategory text-[20px] font-preten500 mb-8">
            {campsite.lineIntro}
          </h4>
        )}
      </>
      <AmenitiesInfo
        caravInnerFclty={campsite?.caravInnerFclty}
        glampInnerFclty={campsite?.glampInnerFclty}
      />
      <FacilityInfo sbrsCl={campsite?.sbrsCl} sbrsEtc={campsite?.sbrsEtc} />
      {campsite?.operPdCl && campsite?.operDeCl && (
        <>
          <h4 className="detailCategory font-preten500">운영 기간</h4>
          <p className="detailCategory">
            {campsite.operPdCl} / {campsite.operDeCl}
          </p>
        </>
      )}
      <>
        {campsite?.animalCmgCl && (
          <div className="flex items-center gap-3 mb-2">
            <h4 className="mb-0 detailCategory font-preten500">애완동물 출입</h4>
            <p className="mb-0 detailCategory">{campsite?.animalCmgCl}</p>
          </div>
        )}
      </>
      <>
        {campsite?.tel && (
          <div className="flex items-center gap-3 mb-2">
            <h4 className="mb-0 detailCategory font-preten500">전화 문의</h4>
            <p className="mb-0 detailCategory">{campsite?.tel}</p>
          </div>
        )}
      </>

      <>
        {campsite?.homepage && (
          <Link to={campsite?.homepage}>
            <button className="guideBox p-3 w-[150px] h-[20px] mt-8">홈페이지 바로가기</button>
          </Link>
        )}
      </>
    </section>
  );
};

export default DetailInfo;
