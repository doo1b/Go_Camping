const DetailPageTitle = ({ campsite }) => {
  return (
    <>
      <div className="flex items-end gap-10 mt-5 mb-5">
        <h1 className="text-4xl font-preten600">{campsite?.facltNm}</h1>
        <h4 className="pb-1 mb-0 detailCategory font-preten500">{campsite?.induty}</h4>
      </div>
      <>
        {campsite?.lineIntro && (
          <h4 className="detailCategory text-[17px]">
            {campsite.lineIntro}
          </h4>
        )}
      </>
    </>
  );
};

export default DetailPageTitle;
