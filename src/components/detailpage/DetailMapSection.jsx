import CampsiteMap from "./CampsiteMap";

const DetailMapSection = ({ campsite }) => {
  return (
    <section className="text-center detailSection">
      {campsite?.mapY && campsite?.mapX && (
        <CampsiteMap lat={campsite.mapY} lng={campsite.mapX} />
      )}
      {campsite?.addr1 && (
        <p className="detailCategory mt-2 mb-[60px]">
          캠핑장 주소: {campsite.addr1}
        </p>
      )}
    </section>
  );
};

export default DetailMapSection;
