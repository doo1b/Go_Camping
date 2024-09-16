import React from "react";
import regionImages from "../../assets/region/regionImages";

// 각 지역 클릭 시 필요한 데이터

// contentId: "10",
// mapX: "127.5112565", (경도)
// mapY: "37.7278127", (위도)
// doNm: "강원도", (지역)
// facltNm: "(주)아웃오브파크", (이름)
// addr1: "강원도 춘천시 남면 가옹개길 52-9", (주소)
// zipcode: "24468", (우편번호)
// tel: "1522-1861-", (전화번호, 있는 곳도 있고 없는 곳도 있음)
// homepage: "http://outofpark.com/main/", (홈페이지, 있는 곳도 있고 없는 곳도 있음)

// 1. 클릭 시 campsiteList에서 doNm과 name이 같은 데이터 필터링
// 2. 위 데이터만 따로 뽑아서 포맷팅
// 3. mapY, mapX에 해당하는 위치에 마커 찍기 (여기서 커스텀 말풍선 까지)
// 4. 다른 도시를 선택 시 기존 마커 제거 후 진행

const RegionCard = ({ onClick, region, name }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <img
        src={regionImages[region]}
        alt={name}
        className="relative filter brightness-[80%] hover:brightness-[90%] transition-all duration-300 ease-in-out"
      />
      <span className="absolute top-[6px] left-2 text-white z-10">{name}</span>
    </div>
  );
};

export default RegionCard;
