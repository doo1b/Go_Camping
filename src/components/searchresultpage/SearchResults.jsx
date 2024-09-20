const SearchResults = ({ filteredCamps }) => {
  return (
    <ul>
      {filteredCamps.map((camp) => (
        <li
          key={camp.contentId}
          className="flex p-4 mb-6 bg-white border border-gray-300 rounded-lg shadow-md"
        >
          <img
            src={camp.firstImageUrl}
            alt={camp.name}
            className="object-cover w-32 h-32 mr-4 rounded-lg"
          />
          <div>
            <h3>{camp.facltNm}</h3>
            {/* <p>{camp.name}</p> */}
            <p>{camp.lineIntro}</p>
            <p>{camp.addr}</p>
            <p>{camp.tel}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
