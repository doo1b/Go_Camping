import React from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Close from "../../assets/Close";
import { useNavigate } from "react-router-dom";

const CustomOverlay = ({ campsite, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <CustomOverlayMap position={campsite.latlng} yAnchor={1.18} zIndex={10}>
      <div className="w-[350px] h-[200px] flex justify-between items-baseline rounded-md flex-col pt-3 bg-white shadow-mainBoxShadow">
        <div className="flex px-4 justify-between items-center w-full mb-4 text-lg font-preten700">
          {campsite.facltNm}
          <button className="" onClick={() => setIsOpen(false)} title="닫기">
            <Close />
          </button>
        </div>
        <div className="w-full px-4 text-xs flex justify-between items-center flex-row">
          <div>
            <div>{campsite.addr}</div>
            <div className="w-full flex justify-between flex-row mt-[2px] text-[#919191]">
              (우) {campsite.zipcode}
            </div>
            <div className="mt-1 text-campblue flex">{campsite.tel}</div>
            {campsite.homepage !== "" && (
              <span className="mt-1 decoration-1 text-[#3D75CC] hover:decoration-gray-400 hover:underline underline-offset-1">
                <a
                  href={campsite.homepage}
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  홈페이지
                </a>
              </span>
            )}
          </div>
          <span className="flex w-[74px] h-[74px]">
            <img src={campsite.firstImageUrl} alt={campsite.firstImageUrl} />
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/detail/${campsite.contentId}`);
          }}
          className="w-full h-[48px] mt-4 bg-campblue hover:bg-[#294d55] text-white"
        >
          상세보기
        </button>
      </div>
    </CustomOverlayMap>
  );
};

export default CustomOverlay;
