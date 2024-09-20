const formattedCampsitesData = (campsites, region) => {
  const filteredCampsites = campsites.filter((campsite) => {
    if (region === "대전 세종") {
      const regions = region.split(" ");

      return regions.some((region) => campsite.doNm.includes(region));
    }
    return campsite.doNm.includes(region);
  });

  const formattedCampsites = filteredCampsites.map((campsite) => ({
    contentId: campsite.contentId,
    latlng: { lat: +campsite.mapY, lng: +campsite.mapX },
    doNm: campsite.doNm,
    facltNm: campsite.facltNm,
    addr: campsite.addr1,
    zipcode: campsite.zipcode,
    firstImageUrl: campsite.firstImageUrl || "",
    tel: campsite.tel || "",
    homepage: campsite.homepage || "",
    lineIntro: campsite.lineIntro || "",
    caravInnerFclty: campsite.caravInnerFclty || "",
    glampInnerFclty: campsite.glampInnerFclty || "",
    sbrsCl: campsite.sbrsCl || "",
    sbrsEtc: campsite.sbrsEtc || "",
    operPdCl: campsite.operPdCl || "",
    operDeCl: campsite.operDeCl || "",
    animalCmgCl: campsite.animalCmgCl || "",
    induty: campsite.induty || ""
  }));

  return formattedCampsites;
};

const campsiteFormatter = {
  formattedCampsitesData
};

export default campsiteFormatter;
