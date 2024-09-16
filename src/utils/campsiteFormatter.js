import { campsiteList } from "../components/mainpage/mock";

const formattedCampsitesData = (region) => {
  const filteredCampsites = campsiteList.filter((campsite) =>
    campsite.doNm.includes(region)
  );

  const formattedCampsites = filteredCampsites.map((campsite) => ({
    contentId: campsite.contentId,
    latlng: {lat: +campsite.mapY, lng: +campsite.mapX},
    doNm: campsite.doNm,
    facltNm: campsite.facltNm,
    addr: campsite.addr1,
    zipcode: campsite.zipcode,
    firstImageUrl: campsite.firstImageUrl || "",
    tel: campsite.tel || "",
    homepage: campsite.homepage || ""
  }));

  return formattedCampsites;
};

const campsiteFormatter = {
  formattedCampsitesData
};

export default campsiteFormatter;
