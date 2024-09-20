import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../src/assets/indexpages/index_logo.png";
import place from "../../../src/assets/indexpages/index_place.png";
import guide from "../../../src/assets/indexpages/index_guide.png";
import useCampsite from "../../hooks/useCampsite";
import Loading from "../../assets/Loading";

const IndexPage = () => {
  const nav = useNavigate();
  const { isPending } = useCampsite();

  if (isPending)
    return (
      <div className="fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
        <Loading />
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-campblue">
      <div className="py-10">
        <img className="w-[500px] m-auto" src={logo} alt="로고 이미지" />
      </div>
      <div>
        <div className="flex justify-between w-[500px] mt-6">
          <button
            type="button"
            onClick={() => nav("/main")}
            className="transition-transform duration-300 transform hover:bg-opacity-110 active:scale-90 hover:scale-110"
          >
            <img
              key="true"
              className="w-28"
              src={place}
              alt="메인 페이지 이동 이미지"
            />
          </button>
          <button
            type="button"
            onClick={() => nav("/guide")}
            className="transition-transform duration-300 transform hover:bg-opacity-110 active:scale-90 hover:scale-110"
          >
            <img
              key="true"
              className="w-28"
              src={guide}
              alt="영상 가이드 페이지 이미지"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
