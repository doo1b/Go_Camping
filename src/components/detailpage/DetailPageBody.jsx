import DetailPageLogo from '../../assets/DetailPageLogo';
import DetailInfo from './DetailInfo';
import DetailMapSection from './DetailMapSection';

const DetailPageBody = ({ campsite }) => {
  return (
    <div className="flex flex-wrap">
      <section className="min-w-[400px] min-h-[300px]">
        <>{ campsite?.firstImageUrl !== "" ? <img src={campsite?.firstImageUrl} /> : <DetailPageLogo /> }</>
      </section>
      <DetailInfo campsite={campsite} />
      <DetailMapSection campsite={campsite} />
    </div>
  )
}

export default DetailPageBody