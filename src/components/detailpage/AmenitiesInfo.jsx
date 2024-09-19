const AmenitiesInfo = ({ caravInnerFclty, glampInnerFclty }) => {
  return (
    <>
      {caravInnerFclty && (
        <>
          <h4 className="detailCategory font-preten400">카라반 편의 시설</h4>
          <p className="detailCategory">{caravInnerFclty}</p>
        </>
      )}

      {glampInnerFclty && (
        <>
          <h4 className="detailCategory font-preten400">글램핑 편의 시설</h4>
          <p className="detailCategory">{glampInnerFclty}</p>
        </>
      )}
    </>
  );
}

export default AmenitiesInfo