import React from "react";

const DetailPageTitle = ({ campsite }) => {
  return (
    <div className="flex items-center justify-center gap-5 mb-3">
      <h1 className="text-3xl font-preten500">{campsite?.facltNm}</h1>
      <h4 className="flex text-[17px] font-preten400">{campsite?.induty}</h4>
    </div>
  );
};

export default DetailPageTitle;
