import { useNavigate } from "react-router-dom";
import { useLocationStore } from "../../store/locationStore";

const SearchResults = ({ filteredCamps }) => {
  const { setCampsite } = useLocationStore();
  const navgate = useNavigate();

  return (
    <ul className="grid grid-cols-[repeat(2,minmax(500px,1fr))] gap-y-10 gap-x-20 border-t-[1px] pt-10 mt-2">
      {filteredCamps.map((camp) => (
        <li
          key={camp.contentId}
          className="flex flex-row h-48 border-b-[1px] pb-10"
          onClick={() => {
            setCampsite(camp), navgate(`/detail/${camp.contentId}`);
          }}
        >
          <img
            src={
              camp.firstImageUrl
                ? camp.firstImageUrl
                : "https://images.unsplash.com/photo-1496947850313-7743325fa58c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={camp.name}
            className="object-cover aspect-[3/2] mr-4 rounded-xl"
          />{" "}
          <div className="flex flex-col justify-between py-1">
            <p className="text-lg font-preten600">{camp.facltNm}</p>
            <p className="text-sm">{camp.lineIntro}</p>
            <div className="text-sm">
              <p>{camp.addr1}</p>
              <p>{camp.tel ? camp.tel : "번호 정보 없음"}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
