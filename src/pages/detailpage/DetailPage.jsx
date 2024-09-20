import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getOneCampsite, getTotalCount } from "../../api/campSite";
import DetailPageTitle from "../../components/detailpage/DetailPageTitle";
import DetailPageBody from "../../components/detailpage/DetailPageBody";

const DetailPage = () => {
  const contentId = useParams("contentId");
  const [campsite, setCampsite] = useState(null);

  useEffect(() => {
    const getCampsite = async (contentId) => {
      try {
        const count = await getTotalCount();
        console.log(count);
        const data = await getOneCampsite(contentId);
        setCampsite(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getCampsite(contentId);
  }, [contentId]);

  console.log(campsite);

  return (
    <>
      <DetailPageTitle campsite={campsite} />
      <DetailPageBody campsite={campsite} />
    </>
  );
};

export default DetailPage;
