const DetailPageTitle = ({ campsite }) => {
  return (
    <>
      <div className="flex items-end gap-3 mt-10">
        <h1 className="text-4xl font-preten600">{campsite?.facltNm}</h1>
        <h4 className="mb-0 text-lg detailCategory">{campsite?.induty}</h4>
      </div>
      <>
        {campsite?.lineIntro && (
          <h4 className="mt-3 text-lg detailCategory">{campsite.lineIntro}</h4>
        )}
      </>
    </>
  );
};

export default DetailPageTitle;
