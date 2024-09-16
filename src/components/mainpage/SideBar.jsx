import React, { useState } from "react";
import SwitchToggle from "../../assets/SwitchToggle";
import Logo from "../../assets/Logo";
import { useNavigate } from "react-router-dom";
import RegionCard from "./RegionCard";

const regionObj = {
  seoul: "서울",
  gyeonggi: "경기도",
  incheon: "인천",
  gangwon: "강원도",
  daejeonSejong: "대전 · 세종",
  chungcheong: "충청도",
  daegu: "대전",
  jeolla: "전라도",
  gwangju: "광주",
  gyeongsang: "경상도",
  busan: "부산",
  jeju: "제주도"
};

const SideBar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <aside
      className={`w-[300px] h-[calc(100vh-48px)] px-6 py-4 shadow-mainBoxShadow fixed z-10 flex top-6 left-6 rounded-2xl justify-center items-center bg-white transition-transform duration-300 ease-in-out ${
        isToggle ? "translate-x-0" : "-translate-x-[324px]"
      }`}
    >
      <div className="w-full h-full flex justify-between items-center flex-col">
        <Logo />
        <div className="text-base mt-4 text-campblue">찾고 계신 캠핑지가 있나요?</div>
        <div className="w-full max-h-[600px] my-4 py-2 flex justify-center items-center flex-wrap overflow-y-auto gap-2">
          {Object.keys(regionObj).map((region) => (
            <RegionCard key={region} region={region} name={regionObj[region]} />
          ))}
        </div>
        <button
          onClick={() => navigate("/guide")}
          className="w-[252px] h-[48px] rounded-lg bg-campblue text-white hover:bg-[#294d55]"
        >
          캠핑 가이드 영상
        </button>
      </div>
      <button
        onClick={() => setIsToggle((prev) => !prev)}
        className="absolute right-[-48px] flex justify-center items-center w-9 h-9 outline-none bg-background40 hover:bg-gray-500 backdrop-blur-sm rounded-full"
      >
        <SwitchToggle isToggle={isToggle} />
      </button>
    </aside>
  );
};

export default SideBar;
