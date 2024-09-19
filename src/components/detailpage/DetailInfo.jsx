import { Link } from 'react-router-dom';
import AmenitiesInfo from './AmenitiesInfo';
import FacilityInfo from './FacilityInfo';


const DetailInfo = ({ campsite }) => {
  return (
    <section className="detailSection">
      <>{ campsite?.lineIntro && <h4 className="detailCategory font-preten400">{campsite.lineIntro}</h4> }</>
      <AmenitiesInfo caravInnerFclty={campsite?.caravInnerFclty} glampInnerFclty={campsite?.glampInnerFclty} />
      <FacilityInfo sbrsCl={campsite?.sbrsCl} sbrsEtc={campsite?.sbrsEtc} />
      <h4 className="detailCategory font-preten400">운영 기간</h4>
      <p className="detailCategory">{campsite?.operPdCl} / {campsite?.operDeCl}</p>
      <div className="flex items-center gap-3 mb-2">
        <h4 className="mb-0 detailCategory font-preten400">애완동물 출입</h4><p className="mb-0 detailCategory">{campsite?.animalCmgCl}</p>
      </div>
      <>{ campsite?.tel && <p className="detailCategory">전화 문의: {campsite?.tel}</p> }</>
      <>{ campsite?.homepage && <Link to={campsite?.homepage} className='detailCategory'>홈페이지 바로가기</Link> }</>
    </section>
  )
}

export default DetailInfo