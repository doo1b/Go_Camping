import CampsiteMap from "./CampsiteMap";

const DetailMapSection = ({ campsite }) => {
  return (
    <section className="text-center detailSection">
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
