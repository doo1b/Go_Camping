import CampsiteMap from "./CampsiteMap"

const DetailMapSection = ({ campsite }) => {
  return (
    <section className="min-w-[400px] min-h-[300px]">
      {campsite?.mapY && campsite?.mapX && (
        <CampsiteMap lat={campsite.mapY} lng={campsite.mapX} />
      )}
      <p className="text-[17px] font-preten300 mb-2">캠핑장 주소: {campsite?.addr1}</p>
    </section>
  )
}

export default DetailMapSection