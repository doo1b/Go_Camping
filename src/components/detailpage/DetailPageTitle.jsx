const DetailPageTitle = ({ campsite }) => {
  return (
    <div className="flex items-center justify-center gap-5 mt-3 mb-3">
      <h1 className="text-3xl font-preten500">{campsite?.facltNm}</h1>
      <h4 className="mb-0 detailCategory font-preten400">{campsite?.induty}</h4>
    </div>
  );
};

export default DetailPageTitle;
