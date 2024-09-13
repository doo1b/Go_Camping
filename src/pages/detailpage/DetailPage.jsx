import { Link, useParams } from "react-router-dom"
import { postCampSites } from "../../api/GetCampSite";
import { useEffect } from "react";
import { useState } from "react";
import { getOneCampsite } from "../../api/campSite";

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
  }, []);

  console.log(campsite);

  return (
    <>
      <div className="flex justify-center mb-3">
        <h1>캠핑장 이름: {campsite?.facltNm}</h1>
        <h4>업종: {campsite?.induty}</h4>
      </div>
      <div className="flex flex-wrap">
        <section className="min-w-[400px] min-h-[300px]">
          <img src={campsite?.firstImageUrl} />
        </section>
        <section className="min-w-[400px] min-h-[300px]">
          <h4>캠핑장 한줄 소개: {campsite?.lineIntro}</h4>
          <h5>편의 시설</h5>
          <p>both ? caravInnerFclty ? glampInnerFclty ? none</p>
          <h5>부대 시설</h5>
          <p>{campsite?.sbrsCl}, {campsite?.sbrsEtc}</p>
          <h5>운영 기간</h5>
          <p>{campsite?.operPdCl}</p>
          <h5>애완동물 출입</h5><p>{campsite?.animalCmgCl}</p>
          <p>전화 문의: {campsite?.tel}</p>
          <Link to={campsite?.homepage}>홈페이지 바로가기</Link>
        </section>
        <section className="min-w-[400px] min-h-[300px]">
          <p>위도: {campsite?.mapX}</p>
          <p>경도: {campsite?.mapY}</p>
          <p>주소: {campsite?.addr1}</p>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
