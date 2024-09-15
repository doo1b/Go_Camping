import { useState } from "react";

// 임의의 캠핑장 데이터 생성
const campingData = [
  {
    id: 1,
    name: "Seoul Campground",
    description: "도심 속 자연을 느낄 수 있는 서울 캠핑장 입니다.",
    address: "서울특별시 중구 서울로 110",
    lat: 37.5665,
    Ing: 126.978,
    phone: "02-1111-1111"
  },
  {
    id: 2,
    name: "Busan Mountain Camp",
    description: "부산의 산속에 위치한 조용하고 아름다운 캠프장 입니다.",
    address: "부산광역시 해운대구 산길로 35",
    lat: 35.1796,
    Ing: 129.0756,
    phone: "051-2222-2222"
  },
  {
    id: 3,
    name: "Jeju Island Camping",
    description: "제주도의 바다와 산을 동시에 즐길 수 있는 캠핑장 입니다.",
    address: "제주특별자치도 제주시 오름길 22",
    lat: 33.4996,
    Ing: 126.5312,
    phone: "064-3333-3333"
  },
  {
    id: 4,
    name: "Gangwon Valley Camp",
    description: "강원도의 맑은 계곡 옆에 위치한 캠핑장 입니다.",
    address: "강원도 강릉시 계곡로 18",
    lat: 37.8228,
    Ing: 128.1555,
    phone: "033-4444-4444"
  }
];

const SearchResultPage = () => {
  const [keyword, setKeyword] = useState("");
  const [filteredCamps, setFilteredCamps] = useState([]);

  // 검색어를 바탕으로 캠핑장을 필터링하는 함수
  const handleSearch = () => {
    const results = campingData.filter((camp) =>
      camp.name.toLowerCase().includes(keyword.toLowerCase())
    );
    // 필터링된 결과를 setFilteredCamps에 저장
    setFilteredCamps(results);
  };

  // 검색 입력창에서 Enter키를 눌렀을 때, 검색을 실행하는 함수
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Enter를 눌렀을 때 검색 함수 호출
      handleSearch();
    }
  };

  return (
    <div className="container box-border gap-5 m-10 mx-auto gap-y-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={keyword}
          // 입력할 때마다 상태 업데이트
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="캠핑장을 검색해 보세요."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="absolute text-gray-500 transform -translate-y-1/2 right-2 top-1/2"
        >
          🔍
        </button>
      </div>
      {filteredCamps.length > 0 && (
        <ul className="w-full max-w-4xl mt-6 space-y-4">
          {filteredCamps.map((camp) => (
            <li
              key={camp.id}
              className="p-4 bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <h3>{camp.name}</h3>
              <h3>{camp.description}</h3>
              <h3>{camp.address}</h3>
              <h3>{camp.phone}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResultPage;
