import CampsiteMap from "./CampsiteMap";

const DetailMapSection = ({ campsite }) => {
  console.log(campsite);
  return (
    <section className="detailSection mt-[32px]">
      <h3 className="mb-5 text-lg detailCategory font-preten600">
        <span className="pl-2 border-l-[3px] border-[#78b5cd]">위치</span>
      </h3>
      {campsite?.latlng && (
        <CampsiteMap lat={campsite.latlng.lat} lng={campsite.latlng.lng} />
      )}
      {/* 검색 결과 페이지 포맷터 적용 안됨, mapX mapY 위치로 지도 띄우기 */}
      {campsite?.mapX && campsite.mapY && (
        <CampsiteMap lat={campsite.mapY} lng={campsite.mapX} />
      )}
      {campsite?.addr && (
        <p className="detailCategory mt-2 mb-[60px]">{campsite.addr}</p>
      )}
      {/* 검색 결과 페이지는 포맷터가 적용되지 않아서 addr1로 주소를 받아옴 */}
      {campsite?.addr1 && (
        <p className="detailCategory mt-2 mb-[60px]">{campsite.addr1}</p>
      )}
    </section>
  );
};

export default DetailMapSection;
