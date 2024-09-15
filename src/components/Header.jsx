import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/img/header_logo.png";
import { useState } from "react";
const Header = () => {
  const [search, setsearch] = useState("");
  const onChange = (e) => {
    setsearch(e.target.value);
    // 검색 기능 구현 중
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
          to="guide"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          가이드 영상으로 가기
        </Link>
      </div>
      <input
        type="text"
        value={search}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded"
      />
    </header>
  );
};

export default Header;
