import { useEffect, useState } from "react"; // import SearchBar from "../../components/sea0rchresultpage/SearchBar";
import SearchResults from "../../components/searchresultpage/SearchResults";
import { useSearchParams } from "react-router-dom";
import useQuerys from "../../queries/useQuerys";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredCamps, setFilteredCamps] = useState([]);
  const { data: campsites } = useQuerys.useGetCampsitesQuery();
  const query = searchParams.get("keyword");
  console.log(campsites);

  // 쿼리스트링을 바탕으로 캠핑장 필터링
  useEffect(() => {
    if (query) {
      const results = campsites?.filter((camp) => {
        return camp.facltNm?.includes(query);
      });
      console.log(results);
      setFilteredCamps(results);
    }
  }, [query]);

  return (
    <div className="flex flex-col items-center py-8">
      {filteredCamps?.length > 0 ? (
        <SearchResults filteredCamps={filteredCamps} />
      ) : (
        <p className="text-gray-500">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchResultPage;
