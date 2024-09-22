import { Link } from "react-router-dom";

const CampsiteEssential = ({ campsite }) => {
  return (
    <>
      <div className="mb-5 leading-3">
        <h4 className="text-lg detailCategory font-preten600">운영 기간</h4>
        <p className="detailCategory">
          {campsite?.operPdCl && campsite?.operDeCl
            ? `${campsite.operPdCl} / ${campsite.operDeCl}`
            : "정보 없음"}
        </p>
      </div>
      <div className="mb-5 leading-3">
        <h4 className="text-lg detailCategory font-preten600">애완동물 출입</h4>
        <p className="detailCategory">
          {campsite?.animalCmgCl ? campsite.animalCmgCl : "정보 없음"}
        </p>
      </div>
      <div className="leading-3">
        <h4 className="text-lg detailCategory font-preten600">전화 문의</h4>
        <p className="detailCategory">
          {campsite?.tel ? campsite.tel : "정보 없음"}
        </p>
      </div>

      {campsite?.homepage && (
        <Link to={campsite?.homepage}>
          <button className="guideBox p-3 w-[150px] h-[20px] mt-8">
            홈페이지 바로가기
          </button>
        </Link>
      )}
    </>
  );
};

export default CampsiteEssential;
