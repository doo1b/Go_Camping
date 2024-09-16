import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/img/header_logo.png";
import { useState } from "react";
const Header = () => {
  const [searchForm, setSearchForm] = useState("");
  const submitSearchForm = (e) => {
    e.preventDefault();

    // 검색 기능 , 날씨 데이터 끌어오기 인덱스 페이지 css 일부 수정 (가이드 이미지로 수정)
    // 라우팅 설정 관련해서 의문점이 있음 튜터님한테 여쭤보고
  };
  return (
    <header className="bg-campblue p-4 flex items-center justify-between">
      <div className="flex-shrink-0">
        <Link to="/main" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="로고 이미지 홈으로 이동" />
        </Link>
        {/* 지도로 이동하는 설명 필요함 */}
      </div>
      <div className="flex-grow text-center">날씨 데이터</div>
      <div className="flex-shrink-0 flex items-center space-x-4">
        <Link
          to="/guide"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          가이드 영상으로 가기
        </Link>
      </div>
      <form
        onSubmit={submitSearchForm}
        className="w-[255px] h-[45px] flex justify-between items-center px-4 z-10 rounded-full shadow-mainBoxShadow bg-white fixed top-[22px] right-6"
      >
        <input
          type="text"
          value={searchForm}
          onChange={(e) => setSearchForm(e.target.value)}
          placeholder="캠핑장을 검색해 보세요!"
          className="outline-none pl-1"
        />
      </form>
    </header>
  );
};

export default Header;
