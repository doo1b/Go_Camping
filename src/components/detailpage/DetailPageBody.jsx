import DetailPageLogo from '../../assets/DetailPageLogo';
import DetailInfo from './DetailInfo';
import DetailMapSection from './DetailMapSection';

const DetailPageBody = ({ campsite }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <section className="detailSection w-[600px]">
        <>{ campsite?.firstImageUrl !== "" ? <img src={campsite?.firstImageUrl} /> : <DetailPageLogo /> }</>
      </section>
      <DetailInfo campsite={campsite} />
      <DetailMapSection campsite={campsite} />
    </div>
  )
}

export default DetailPageBody