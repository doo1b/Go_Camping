import { useState } from "react";
import SearchBar from "../../components/searchresultpage/SearchBar";
import SearchResults from "../../components/searchresultpage/SearchResults";

// 임의의 캠핑장 데이터 생성
// const campingData = [
//   {
//     id: 1,
//     name: "Seoul Campground",
//     nameKr: "서울 캠프 그라운드",
//     image: "https://via.placeholder.com/100",
//     description: "도심 속 자연을 느낄 수 있는 서울 캠핑장 입니다.",
//     address: "서울특별시 중구 서울로 110",
//     lat: 37.5665,
//     Ing: 126.978,
//     phone: "02-1111-1111"
//   },
//   {
//     id: 2,
//     name: "Busan Mountain Camp",
//     nameKr: "부산 마운틴 캠프",
//     image: "https://via.placeholder.com/100",
//     description: "부산의 산속에 위치한 조용하고 아름다운 캠프장 입니다.",
//     address: "부산광역시 해운대구 산길로 35",
//     lat: 35.1796,
//     Ing: 129.0756,
//     phone: "051-2222-2222"
//   },
//   {
//     id: 3,
//     name: "Jeju Island Camping",
//     nameKr: "제주 아일랜드 캠핑",
//     image: "https://via.placeholder.com/100",
//     description: "제주도의 바다와 산을 동시에 즐길 수 있는 캠핑장 입니다.",
//     address: "제주특별자치도 제주시 오름길 22",
//     lat: 33.4996,
//     Ing: 126.5312,
//     phone: "064-3333-3333"
//   },
//   {
//     id: 4,
//     name: "Gangwon Valley Camp",
//     nameKr: "강원 밸리 캠프",
//     image: "https://via.placeholder.com/100",
//     description: "강원도의 맑은 계곡 옆에 위치한 캠핑장 입니다.",
//     address: "강원도 강릉시 계곡로 18",
//     lat: 37.8228,
//     Ing: 128.1555,
//     phone: "033-4444-4444"
//   }
// ];

const SearchResultPage = () => {
  const [keyword, setKeyword] = useState("");
  const [filteredCamps, setFilteredCamps] = useState([]);

  // 검색어를 바탕으로 캠핑장을 필터링하는 함수
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const results = campingData.filter(
  //     (camp) =>
  //       camp.name.toLowerCase().includes(keyword.toLowerCase()) ||
  //       camp.nameKr.includes(keyword)
  //   );
  //   // 필터링된 결과를 setFilteredCamps에 저장
  //   setFilteredCamps(results);
  // };

  // 검색 입력창에서 Enter키를 눌렀을 때, 검색을 실행하는 함수
  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     // Enter를 눌렀을 때 검색 함수 호출
  //     handleSearch();
  //   }
  // };

  return (
    <div className="flex flex-col items-center py-8">
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
      />
      {filteredCamps.length > 0 && (
        <SearchResults filteredCamps={filteredCamps} />
      )}
    </div>
  );
};

export default SearchResultPage;
