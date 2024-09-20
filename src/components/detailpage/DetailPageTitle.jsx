const DetailPageTitle = ({ campsite }) => {
  return (
    <div className="flex items-center justify-center gap-5 mt-10 mb-10">
      <h1 className="text-4xl font-preten600">{campsite?.facltNm}</h1>
      <h4 className="mb-0 detailCategory font-preten500">{campsite?.induty}</h4>
    </div>
  );
};

export default DetailPageTitle;
