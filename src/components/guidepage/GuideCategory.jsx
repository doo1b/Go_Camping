import useGuideStore from "../../zustand/guide";

const GuideCategory = () => {
  const { modalOpen, setSearchKeyword } = useGuideStore();
  const GUIDETEXT = [
    {
      guide: `캠핑 입문자를 위한
        필수 가이드`
    },
    {
      gear: `초보 캠퍼를 위한
        장비 선택 꿀팁`
    },
    {
      tent: `텐트 설치의 모든 것
        단계별 가이드`
    },
    {
      bbq: `바베큐 마스터가 되는 법!
        캠핑 요리 팁`
    },
    {
      cook: `안전하고 편리한
        캠핑 요리법`
    },
    {
      checklist: `완벽한 캠핑을 위한
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
              modalOpen(), setSearchKeyword(Object.keys(text)[0]);
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
