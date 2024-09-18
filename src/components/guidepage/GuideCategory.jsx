import { useNavigate } from "react-router-dom";

const GuideCategory = () => {
  const navigate = useNavigate();
  const GUIDETEXT = [
    {
      "캠핑 입문 가이드": `캠핑 입문자를 위한
        필수 가이드`
    },
    {
      "캠핑 장비 선택 팁": `초보 캠퍼를 위한
        장비 선택 꿀팁`
    },
    {
      "텐트 설치 가이드": `텐트 설치의 모든 것
        단계별 가이드`
    },
    {
      "캠핑장 바베큐 팁": `바베큐 마스터가 되는 법!
        캠핑 바베큐 팁`
    },
    {
      "캠핑장 요리 추천": `안전하고 편리한
        캠핑 요리법`
    },
    {
      "캠핑 준비물": `완벽한 캠핑을 위한
        준비물 체크리스트`
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen font-preten400">
      <div className="grid grid-cols-3 gap-10">
        {GUIDETEXT.map((text) => (
          <div
            key={Object.keys(text)}
            className="guideBox"
            onClick={() => {
              navigate(`videolist?category=${Object.keys(text)}`);
            }}
          >
            {Object.values(text)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideCategory;
