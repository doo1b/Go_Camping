const AmenitiesInfo = ({ caravInnerFclty, glampInnerFclty }) => {
  return (
    <>
      {caravInnerFclty && (
        <>
          <h4 className="text-[17px] font-preten400 mb-2">카라반 편의 시설</h4>
          <p className="text-[17px] font-preten300 mb-2">{caravInnerFclty}</p>
        </>
      )}

      {glampInnerFclty && (
        <>
          <h4 className="text-[17px] font-preten400 mb-2">글램핑 편의 시설</h4>
          <p className="text-[17px] font-preten300 mb-2">{glampInnerFclty}</p>
        </>
      )}
    </>
  );
}

export default AmenitiesInfo