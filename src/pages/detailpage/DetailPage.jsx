import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import { getOneCampsite } from "../../api/campSite";

const AmenitiesInfo = ({ caravInnerFclty, glampInnerFclty }) => {
  return (
    <>
      {caravInnerFclty && (
        <>
          <h4 className="text-[17px] font-preten400 mb-2">카라반 편의 시설</h4>
          <p className="text-[17px] font-preten300 mb-2">{caravInnerFclty}</p>
        </>
      )}

      {glampInnerFclty && (
        <>
          <h4 className="text-[17px] font-preten400 mb-2">글램핑 편의 시설</h4>
          <p className="text-[17px] font-preten300 mb-2">{glampInnerFclty}</p>
        </>
      )}
    </>
  );
}

const FacilityInfo = ({ sbrsCl, sbrsEtc }) => {
  const combined = sbrsCl && sbrsEtc ? `${sbrsCl}, ${sbrsEtc}` 
                  : sbrsCl ? sbrsCl 
                  : sbrsEtc ? sbrsEtc 
                  : null;

  return (
    <>
      {combined && (
        <>
          <h4 className="text-[17px] font-preten400 mb-2">부대 시설</h4>
          <p className="text-[17px] font-preten300 mb-2">{combined}</p>
        </>
      )}
    </>
  );
}

const DetailPage = () => {
  const contentId = useParams('contentId');
  const [campsite, setCampsite] = useState(null);

  // useEffect(() => {
  //   const loadCampsites = async () => {
  //     try {
  //       await postCampSites();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   loadCampsites();
  // }, []);

  useEffect(() => {
    const getCampsite = async (contentId) => {
      try {
        const data = await getOneCampsite(contentId);
        setCampsite(data[0]);
      } catch (error) {
        console.log(error);
      }
    }

    getCampsite(contentId); 
  }, [contentId]);

  console.log(campsite);

  return (
    <>
      <div className="flex justify-center items-center mb-3 gap-5">
        <h1 className="text-3xl font-preten500">{campsite?.facltNm}</h1>
        <h4 className="flex text-[17px] font-preten400">{campsite?.induty}</h4>
      </div>
      <div className="flex flex-wrap">
        <section className="min-w-[400px] min-h-[300px]">
          <img src={campsite?.firstImageUrl} />
        </section>
        <section className="min-w-[400px] min-h-[300px]">
          <>{ campsite?.lineIntro && <h4 className="text-[17px] font-preten400 mb-2">{campsite.lineIntro}</h4> }</>
          <AmenitiesInfo caravInnerFclty={campsite?.caravInnerFclty} glampInnerFclty={campsite?.glampInnerFclty} />
          <FacilityInfo sbrsCl={campsite?.sbrsCl} sbrsEtc={campsite?.sbrsEtc} />
          <h4 className="text-[17px] font-preten400 mb-2">운영 기간</h4>
          <p className="text-[17px] font-preten300 mb-2">{campsite?.operPdCl} / {campsite?.operDeCl}</p>
          <div className="flex gap-3 items-center">
            <h4 className="text-[17px] font-preten400 mb-2">애완동물 출입</h4><p className="text-[17px] font-preten300 mb-2">{campsite?.animalCmgCl}</p>
          </div>
          <>{ campsite?.tel && <p className="text-[17px] font-preten300 mb-2">전화 문의: {campsite?.tel}</p> }</>
          <>{ campsite?.homepage && <Link to={campsite?.homepage}>홈페이지 바로가기</Link> }</>
        </section>
        <section className="min-w-[400px] min-h-[300px]">
          <p>위도: {campsite?.mapX}</p>
          <p>경도: {campsite?.mapY}</p>
          <p className="text-[17px] font-preten300 mb-2">캠핑장 주소: {campsite?.addr1}</p>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
