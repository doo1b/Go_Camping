const SearchResultPage = () => {
  // 임의의 캠핑장 데이터 생성
  const campingData = [
    { id: 1, name: "Seoul Campground", lat: 37.5665, Ing: 126.978 },
    { id: 2, name: "Busan Mountain Camp", lat: 35.1796, Ing: 129.0756 },
    { id: 3, name: "Jeju Island Camping", lat: 33.4996, Ing: 126.5312 },
    { id: 4, name: "Gangwon Valley Camp", lat: 37.8228, Ing: 128.1555 }
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
