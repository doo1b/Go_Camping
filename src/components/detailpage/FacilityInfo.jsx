const FacilityInfo = ({ sbrsCl, sbrsEtc }) => {
  const combined = 
    sbrsCl && sbrsEtc ? `${sbrsCl}, ${sbrsEtc}` 
    : sbrsEtc ? sbrsEtc 
    : sbrsCl ? sbrsCl 
    : null;

  return (
    <>
      {combined && (
        <>
          <h4 className="detailCategory font-preten500">부대 시설</h4>
          <p className="detailCategory">{combined}</p>
        </>
      )}
    </>
  );
}

export default FacilityInfo