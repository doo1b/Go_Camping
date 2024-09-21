import { Link } from "react-router-dom";
import AmenitiesInfo from "./AmenitiesInfo";
import FacilityInfo from "./FacilityInfo";

const DetailInfo = ({ campsite }) => {
  return (
    <section className="flex content-start justify-between detailSection">
      <div className="w-[700px] content-center">
        <AmenitiesInfo
          caravInnerFclty={campsite?.caravInnerFclty}
          glampInnerFclty={campsite?.glampInnerFclty}
        />
        <hr className="w-[700px] my-3" />
        <FacilityInfo sbrsCl={campsite?.sbrsCl} sbrsEtc={campsite?.sbrsEtc} />
      </div>

      <div className="w-[350px] content-center">
        <>
          <h4 className="detailCategory font-preten500">운영 기간</h4>
          <p className="detailCategory">
            {campsite?.operPdCl && campsite?.operDeCl
              ? `${campsite.operPdCl} / ${campsite.operDeCl}`
              : "정보 없음"}
          </p>

          <h4 className="detailCategory font-preten500">애완동물 출입</h4>
          <p className="detailCategory">
            {campsite?.animalCmgCl ? campsite.animalCmgCl : "정보 없음"}
          </p>

          <h4 className="detailCategory font-preten500">전화 문의</h4>
          <p className="detailCategory">
            {campsite?.tel ? campsite.tel : "정보 없음"}
          </p>
        </>

        <>
          {campsite?.homepage && (
            <Link to={campsite?.homepage}>
              <button className="guideBox p-3 w-[150px] h-[20px] mt-8">
                홈페이지 바로가기
              </button>
            </Link>
          )}
        </>
      </div>
    </section>
  );
};

export default DetailInfo;
