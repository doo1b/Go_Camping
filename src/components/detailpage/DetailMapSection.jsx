import CampsiteMap from "./CampsiteMap";

const DetailMapSection = ({ campsite }) => {
  return (
    <section className="detailSection">
      <h3 className="detailCategory text-[24px] mb-4 font-preten400">위치</h3>
      {campsite?.latlng && (
        <CampsiteMap lat={campsite.latlng.lat} lng={campsite.latlng.lng} />
      )}
      {campsite?.addr && (
        <p className="detailCategory mt-2 mb-[60px]">
          캠핑장 주소: {campsite.addr}
        </p>
      )}
    </section>
  );
};

export default DetailMapSection;
