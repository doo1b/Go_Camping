import logo from "../../../src/assets/header/header_logo.png";
import place from "../../../src/assets/header/header_place.png";
import guide from "../../../src/assets/header/header_guide.png";
import WeatherDisplay from "../../components/mainpage/WeatherDisplay";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [searchForm, setSearchForm] = useState("");
  const submitSearchForm = (e) => {
    e.preventDefault();
  };

  // 웨더 디스플레이 top 맞추는 css 코드 작성예정
  return (
    <header className="bg-campblue p-4 flex items-center justify-between sticky top-0 z-50 h-[95px]">
      <div className="flex-shrink-0">
        <Link to="/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="로고 이미지 홈으로 이동" />
        </Link>
      </div>
      <WeatherDisplay />
      <div className="flex items-center flex-shrink-0 space-x-6">
        <Link
          to="/main"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <img src={place} alt="지도로 가기" />
        </Link>
        <Link
          to="/guide"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <img src={guide} alt="지도로 가기" />
        </Link>
        <form
          onSubmit={submitSearchForm}
          className="w-[255px] h-[45px] flex justify-between items-center px-4 z-10 rounded-full shadow-mainBoxShadow bg-white"
        >
          <input
            type="text"
            value={searchForm}
            onChange={(e) => setSearchForm(e.target.value)}
            placeholder="캠핑장 검색하기!"
            className="pl-1 outline-none"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
