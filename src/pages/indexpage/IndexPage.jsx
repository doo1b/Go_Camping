import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../src/assets/indexpages/index_logo.png";
import place from "../../../src/assets/indexpages/index_place.png";
import guide from "../../../src/assets/indexpages/index_guide.png";

const IndexPage = () => {
  const nav = useNavigate();

  return (
    <div className="flex flex-col justify-center min-h-screen bg-campblue">
      <div className="py-10">
        <img className="m-auto" src={logo} alt="로고 이미지" />
      </div>
      <div>
        <div className="flex justify-center gap-x-60">
          <button
            type="button"
            onClick={() => nav("/main")}
            className="transition transform hover:bg-opacity-110 active:scale-90"
          >
            <img key="true" src={place} alt="메인 페이지 이동 이미지" />
          </button>
          <button
            type="button"
            onClick={() => nav("/guide")}
            className="transition transform hover:bg-opacity-110 active:scale-90"
          >
            <img key="true" src={guide} alt="영상 가이드 페이지 이미지" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
