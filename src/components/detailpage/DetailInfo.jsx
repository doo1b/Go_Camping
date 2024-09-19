import { Link } from 'react-router-dom';
import AmenitiesInfo from './AmenitiesInfo';
import FacilityInfo from './FacilityInfo';


const DetailInfo = ({ campsite }) => {
  return (
    <section className="min-w-[400px] min-h-[300px]">
      <>{ campsite?.lineIntro && <h4 className="text-[17px] font-preten400 mb-2">{campsite.lineIntro}</h4> }</>
      <AmenitiesInfo caravInnerFclty={campsite?.caravInnerFclty} glampInnerFclty={campsite?.glampInnerFclty} />
      <FacilityInfo sbrsCl={campsite?.sbrsCl} sbrsEtc={campsite?.sbrsEtc} />
      <h4 className="text-[17px] font-preten400 mb-2">운영 기간</h4>
      <p className="text-[17px] font-preten300 mb-2">{campsite?.operPdCl} / {campsite?.operDeCl}</p>
      <div className="flex items-center gap-3">
        <h4 className="text-[17px] font-preten400 mb-2">애완동물 출입</h4><p className="text-[17px] font-preten300 mb-2">{campsite?.animalCmgCl}</p>
      </div>
      <>{ campsite?.tel && <p className="text-[17px] font-preten300 mb-2">전화 문의: {campsite?.tel}</p> }</>
      <>{ campsite?.homepage && <Link to={campsite?.homepage}>홈페이지 바로가기</Link> }</>
    </section>
  )
}

export default DetailInfo