import { useEffect } from 'react'
import { postCampSites } from '../../api/GetCampSite';
import { deleteOneCampsite, getArray, getTotalCount } from '../../api/campSite';

const DebugData = () => {
  useEffect(() => {
    const loadCampsites = async () => {
      try {
        const {items:count} = await getTotalCount();
        console.log(count);

        const deleteCampsite = async (id) => {
          await deleteOneCampsite(id);
        }
        
        if(count === 0) {
          await postCampSites();
          console.log("삽입 완료");
        } else {
          const data = await getArray();
          const list = data.map((campsite) => campsite.id);
          list.forEach((id) => {
            deleteCampsite(id);
            console.log("한개 삭제 완료");
          });
          const result = await getTotalCount();
          console.log(result);
          await postCampSites();
          console.log("삽입 완료");
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadCampsites();
  }, []);

  return (
    <div>
      <pre>
db.json에 한국관광공사_고캠핑 정보 조회서비스 데이터를 삽입하기 위한 테스트페이지 입니다.
<br/>정식 배포시에는 이 페이지랑 Route를 삭제하고 배포하셔야 합니다.
      </pre>
    </div>
  )
}

export default DebugData