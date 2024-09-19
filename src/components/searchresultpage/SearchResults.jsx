const SearchResults = ({ filteredCamps }) => {
  return (
    <ul>
      {filteredCamps.map((camp) => (
        <li
          key={camp.id}
          className="flex p-4 bg-white border border-gray-300 rounded-lg shadow-md"
        >
          <img
            src={camp.image}
            alt={camp.name}
            className="object-cover w-32 h-32 mr-4 rounded-lg"
          />
          <div>
            <h3>{camp.nameKr}</h3>
            <p>{camp.name}</p>
            <p>{camp.description}</p>
            <p>{camp.address}</p>
            <p>{camp.phone}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
