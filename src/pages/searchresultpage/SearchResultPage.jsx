import { useEffect, useState } from "react"; // import SearchBar from "../../components/sea0rchresultpage/SearchBar";
import SearchResults from "../../components/searchresultpage/SearchResults";
import { useSearchParams } from "react-router-dom";
import useQuerys from "../../queries/useQuerys";
import TopButton from "../../components/guidepage/TopButton";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredCamps, setFilteredCamps] = useState([]);
  const { data: campsites } = useQuerys.useGetCampsitesQuery();
  const query = searchParams.get("keyword");

  // 쿼리스트링을 바탕으로 캠핑장 필터링
  useEffect(() => {
    if (query) {
      const results = campsites?.filter((camp) => {
        return camp.facltNm?.includes(query);
      });
      setFilteredCamps(results);
    }
  }, [query]);

  return (
    <>
      <div className="flex flex-col items-center pt-16 font-preten400">
        {filteredCamps?.length > 0 ? (
          <div className="w-[1120px]">
            <p className="mr-auto text-lg font-preten600">
              검색 결과{" "}
              <span className="text-[#78b5cd]"> {filteredCamps.length} </span>건
            </p>
            <SearchResults filteredCamps={filteredCamps} />
          </div>
        ) : (
          <p className="text-gray-500">검색 결과가 없습니다.</p>
        )}
      </div>
      <TopButton />
    </>
  );
};

export default SearchResultPage;
