const FacilityInfo = ({ sbrsCl, sbrsEtc }) => {
  const combined = sbrsCl && sbrsEtc ? `${sbrsCl}, ${sbrsEtc}` 
                  : sbrsCl ? sbrsCl 
                  : sbrsEtc ? sbrsEtc 
                  : null;

  return (
    <>
      {combined && (
        <>
          <h4 className="text-[17px] font-preten400 mb-2">부대 시설</h4>
          <p className="text-[17px] font-preten300 mb-2">{combined}</p>
        </>
      )}
    </>
  );
}

export default FacilityInfo