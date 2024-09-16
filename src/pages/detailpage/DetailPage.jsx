import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import { getOneCampsite, getTotalCount } from "../../api/campSite";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import DetailPageLogo from "../../assets/DetailPageLogo";

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

const CampsiteMap = ({ lat, lng }) => {
  console.log(lat, lng);

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: lat,
        lng: lng,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "300px",
      }}
      level={4} // 지도의 확대 레벨
    >
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: lat,
          lng: lng,
        }}
      />
    </Map>
  )
}

const DetailPage = () => {
  const contentId = useParams('contentId');
  const [campsite, setCampsite] = useState(null);

  useEffect(() => {
    const getCampsite = async (contentId) => {
      try {
        const count = await getTotalCount();
        console.log(count);
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
      <div className="flex items-center justify-center gap-5 mb-3">
        <h1 className="text-3xl font-preten500">{campsite?.facltNm}</h1>
        <h4 className="flex text-[17px] font-preten400">{campsite?.induty}</h4>
      </div>
      <div className="flex flex-wrap">
        <section className="min-w-[400px] min-h-[300px]">
        <>{ campsite?.firstImageUrl !== "" ? <img src={campsite?.firstImageUrl} /> : <DetailPageLogo /> }</>
        </section>
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
        <section className="min-w-[400px] min-h-[300px]">
          <CampsiteMap lat={campsite?.mapY} lng={campsite?.mapX} />
          <p className="text-[17px] font-preten300 mb-2">캠핑장 주소: {campsite?.addr1}</p>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
