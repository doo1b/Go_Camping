import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/Group 356.png";
import place from "../../img/Group 368.png";
import guide from "../../img/Group 369.png";

const IndexPage = () => {
  const nav = useNavigate();

  return (
    <body className="bg-campblue">
      <div className="py-20">
        <img className="m-auto" img src={logo} alt="로고 이미지" />
      </div>
      <div>
        <div className="flex justify-center gap-x-20">
          <button type="button" onClick={() => nav("/main")}>
            <img src={place} alt="메인 페이지 이동 이미지" />
          </button>
          <button type="button" onClick={() => nav("/guide")}>
            <img src={guide} alt="영상 가이드 페이지 이미지" />
          </button>
        </div>
      </div>
    </body>
  );
};

export default IndexPage;
