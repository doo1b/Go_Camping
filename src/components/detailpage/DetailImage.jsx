const DetailImage = ({ campsite }) => {
  return (
    <section className="content-center detailSection">
      <>
        {campsite?.firstImageUrl !== "" ? (
          <img
            src={campsite?.firstImageUrl}
            className="object-cover object-bottom w-[1120px] aspect-video rounded-2xl"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1496947850313-7743325fa58c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover object-bottom w-[1120px] aspect-video rounded-2xl"
          />
        )}
      </>
    </section>
  );
};

export default DetailImage;
