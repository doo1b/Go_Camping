const SearchResultPage = () => {
  // 임의의 캠핑장 데이터 생성
  const campingData = [
    {
      id: 1,
      name: "Seoul Campground",
      introduction: "서울 캠프그라운드입니다.",
      address: "서울특별시 중구 서울로 110",
      lat: 37.5665,
      Ing: 126.978,
      phone: "02-1111-1111"
    },
    {
      id: 2,
      name: "Busan Mountain Camp",
      introduction: "부산 마운트 캠프입니다.",
      address: "부산광역시 해운대구 산길로 35",
      lat: 35.1796,
      Ing: 129.0756,
      phone: "051-2222-2222"
    },
    {
      id: 3,
      name: "Jeju Island Camping",
      introduction: "제주 아일랜드 캠핑입니다.",
      address: "제주특별자치도 제주시 오름길 22",
      lat: 33.4996,
      Ing: 126.5312,
      phone: "064-3333-3333"
    },
    {
      id: 4,
      name: "Gangwon Valley Camp",
      introduction: "강원 밸리 캠프입니다.",
      address: "강원도 강릉시 계곡로 18",
      lat: 37.8228,
      Ing: 128.1555,
      phone: "033-4444-4444"
    }
  ];
  return (
    <div className="container box-border gap-5 m-10 mx-auto gap-y-4">
      <div className="p-5">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            className="w-full py-2 pl-4 pr-10 border rounded-xl focus:outline-none"
            placeholder="캠핑장을 검색해 보세요."
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.35-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center justify-center h-32 border-2 w-28 rounded-xl">
          <p>캠핑장 사진</p>
        </div>
        <div className="p-3 border-2 rounded-xl w-96">
          <p>캠핑장 이름</p>
          <p>한 줄 소개</p>
          <p>캠핑장 주소</p>
          <p>전화번호</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center justify-center h-32 border-2 w-28 rounded-xl">
          <p>캠핑장 사진</p>
        </div>
        <div className="p-3 border-2 rounded-xl w-96">
          <p>캠핑장 이름</p>
          <p>한 줄 소개</p>
          <p>캠핑장 주소</p>
          <p>전화번호</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center justify-center h-32 border-2 w-28 rounded-xl">
          <p>캠핑장 사진</p>
        </div>
        <div className="p-3 border-2 rounded-xl w-96">
          <p>캠핑장 이름</p>
          <p>한 줄 소개</p>
          <p>캠핑장 주소</p>
          <p>전화번호</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center justify-center h-32 border-2 w-28 rounded-xl">
          <p>캠핑장 사진</p>
        </div>
        <div className="p-3 border-2 rounded-xl w-96">
          <p>캠핑장 이름</p>
          <p>한 줄 소개</p>
          <p>캠핑장 주소</p>
          <p>전화번호</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
