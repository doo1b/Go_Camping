const AmenitiesInfo = ({ caravInnerFclty, glampInnerFclty }) => {
  // 두 문자열을 배열로 변환하고 합친 후, 중복 제거
  const combinedFacilities = [...new Set([
    ...(caravInnerFclty ? caravInnerFclty.split(",") : []),
    ...(glampInnerFclty ? glampInnerFclty.split(",") : [])
  ])];

  // 최대 8개 항목만 선택
  const displayedFacilities = combinedFacilities.slice(0, 8);

  return (
    <div className="h-[130px]">
      <h4 className="detailCategory font-preten500">편의 시설</h4>
      <div className="grid grid-cols-4 w-[700px] gap-10px">
        {displayedFacilities.length > 0 ? (
          displayedFacilities.map((facility) => (
            <div key={facility.trim()} className="detailCategory">
              {facility.trim()}
            </div>
          ))
        ) : (
          <p className="detailCategory">정보 없음</p>
        )}
      </div>
    </div>
  );
};

export default AmenitiesInfo;
