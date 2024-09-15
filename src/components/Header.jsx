import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/img/header_logo.png";
const Header = () => {
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
        <Link className="text-blue-500 hover:underline">
          가이드 영상으로 가기
        </Link>
      </div>
      <input className="border border-gray-300 p-2 rounded" />
    </header>
  );
};

export default Header;
