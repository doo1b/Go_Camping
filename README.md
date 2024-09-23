## 🏕️ Go Camping!

### 팀 프로젝트 소개

지도 API와 고캠핑 API를 활용해 전국의 캠핑장 위치와 상세정보를 제공해주고, 날씨 API와 유튜브 API를 활용해 캠핑관련 추가 정보를 제공해 주는 캠핑 정보 사이트!

배포 링크 : https://go-camping-pi.vercel.app/ <br />
깃허브 링크 : https://github.com/doo1b/Go_Camping

## 🗂️ 파일 구조

📦src <br />
┣ 📂api <br />
┣ 📂assets <br />
┃ ┣ 📂header <br />
┃ ┣ 📂indexpages <br />
┃ ┣ 📂region <br />
┣ 📂components <br />
┃ ┣ 📂detailpage <br />
┃ ┣ 📂guidepage <br />
┃ ┣ 📂layout <br />
┃ ┣ 📂mainpage <br />
┃ ┗ 📂searchresultpage <br />
┣ 📂hooks <br />
┣ 📂pages <br />
┃ ┣ 📂debugpage <br />
┃ ┣ 📂detailpage <br />
┃ ┣ 📂guidepage <br />
┃ ┣ 📂indexpage <br />
┃ ┣ 📂mainpage <br />
┃ ┗ 📂searchresultpage <br />
┣ 📂queries <br />
┣ 📂router <br />
┣ 📂services <br />
┣ 📂store <br />
┣ 📂style <br />
┣ 📂utils <br />
┣ 📜App.css <br />
┣ 📜App.jsx <br />
┗ 📜main.jsx <br />

## 💡 주요 기능

### 구현 사항

- ✅ API
  - 카카오 지도 API를 활용한 지도 정보 제공
  - 유튜브 API를 활용한 캠핑 관련 영상 정보 제공
- ✅ 전역상태관리
  - Zustand로 클라이언트 상태관리
  - TanStack Query로 서버 상태관리
- ✅ DB
  - 캠핑 데이터를 json-server에 저장
- ✅ RRD(React-router-dom)
  - 중첩 라우팅을 통한 페이지 이동 기능

### 도전

- ✅ API
  - 고캠핑 API를 활용한 캠핑장 상세정보 제공
  - 날씨 API를 활용한 날씨 데이터 제공
- ✅ 커스텀 훅 사용
  - UI와 비지니스 로직을 분리해 유지보수와 코드의 가독성을 높임
- ✅ memoization
  - useMemo, useCallback 훅을 통한 사용자 결과값을 저장해 렌더링 지연시간 최소화
    <br /><br />

## 🛠️ 사용 기술

### 프론트 엔드

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" /><img src="https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="zustand"/><img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white" alt="react query"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router" /><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind-css" /><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white" alt="react-router" /><br />

### API

<img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="youtube" /><img src="https://img.shields.io/badge/KAKAO-FFCD00?style=for-the-badge&logo=kakao&logoColor=white" alt="kakao" /><img src="https://img.shields.io/badge/OPEN WEATHER-E96E50?style=for-the-badge&logo=icloud&logoColor=white" alt="open weather" /><img src="https://img.shields.io/badge/GO CAMPING-0b70b9?style=for-the-badge&logo=houzz&logoColor=white" alt="go camping" /><br />

### 버전 관리

<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/><br />

### 협업 툴

<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" /><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" /><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" /><br /><br />

## ❓ 이슈

### 1. 프로젝트 초기 생성후 실행 시 tailwind css 관련 경고 메시지 확인

#### 이슈 🔥

문제 발생 : 프로젝트 생성 후 초기 세팅 완료하고 테스트를 위해 프로젝트를 실행했을 때 터미널에 다음과 같은 경고 메시지가 출력됨 (No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.) 프로젝트 실행시 정상적으로 브라우저에 런타임 되었으나, 경고 메시지의 내용중 (No utility classes were detected in your source files. / 소스 파일에서 유틸리티 클래스가 감지되지 않았습니다.) 라는 내용을 확인했지만 뒤에 (If this is unexpected, double-check the content option in your Tailwind CSS configuration. / 예상치 못한 일이라면 Tailwind CSS 구성에서 콘텐츠 옵션을 다시 확인하세요.) 라는 메시지를 확인하고 테일윈드 config 파일에서 문제가 생겼다고 판단하여 원인 찾기 시작

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
};
```

#### 해결 과정 🔎

해당 경고를 구글링해 관련된 글을 찾아보고 공식문서를 확인한 내용을 바탕으로 시도 해봤는데 같은 경고문이 사라지지 않았음 공식문서 내용에 따르면 `"./src/**/**/*.{js,ts,jsx,tsx}"` 경로에 작성한 유형의 파일이 없을 경우에도 뜰 수 있다고 하여 ts, tsx는 지우고 폴더 내에 js, jsx 파일을 생성해보았는데도 해결되지 않았음.

#### 해결 방법 ✨

아무 컴포넌트 안에 `<div className="bg-green-500">DetailPage</div>` 태그를 추가하고 프로젝트를 실행하니 경고문이 출력되지 않아 문제가 해결되었음. 단순히 tailwind css를 적용시키지 않아 경고문이 뜬것으로 확인

### 2. 페이지별 헤더 랜더링 구현 중 중첩라우팅 으로 인한 문제 오류 (팀원 이정곤)

#### 이슈 🔥

헤더가 불필요한 페이지가 있어 중첩라우팅을 설정하기 위해 router.jsx파일에서 수정을 진행함 다음과 같은 코드로 작성했는데 정상적으로 랜더링이 되지 않는 것을 확인

```js
<BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/searchresult" element={<SearchResultPage />} />
      <Route path="/detail/:contentId" element={<DetailPage />} />
      <Route path="/guide" element={<GuidePage />} />
      <Route path="/data" element={<DebugData />} />
      <Route path="guide/videolist" element={<VideoListPage />} />
    </Routes>
  </Layout>
  <Routes>
    <Route path="/main" element={<MainPage />} />
    <Route index element={<IndexPage />} />
  </Routes>
</BrowserRouter>
```

#### 해결 과정 및 방법 ✨

구글링을 한결과 RRD로 실행하는 태그는 라우터와 관련없는 태그를 간섭하지 말아야 하는게 원칙이라고 설명되어 있었음. 구글링으로 나와 있는 여러 예시를 참고하여 Route 태그 쪽 element의 요소에 layout을 적고 헤더가 필요한 페이지만 안에 넣어 랜더링이 될수 있게 코드를 작성함 이후 브라우저로 런타임을 해보니 페이지별로 정상적으로 랜더링이 되는것을 확인하였음

```js
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/searchresult" element={<SearchResultPage />} />
      <Route path="/detail/:contentId" element={<DetailPage />} />
      <Route path="/guide" element={<GuidePage />} />
      <Route path="/data" element={<DebugData />} />
      <Route path="guide/videolist" element={<VideoListPage />} />
    </Route>
    <Route path="/main" element={<MainPage />} />
    <Route index element={<IndexPage />} />
  </Routes>
</BrowserRouter>
```

### 3. 카카오맵 API를 활용한 캠핑장 데이터 렌더링 최적화 (팀원 유인철)

#### 이슈 🔥

캠핑장의 데이터는 약 `4500`개 정도 있는데 이 많은 데이터를 필터링 하는 과정중 지도에서 드래그하거나 확대/축소 할때 `10~40FPS` 정도로 **프레임이 저하 되는것을 확인**함 특히 확대 시에는 정상적으로 동작하는 것처럼 보였지만, 축소 시 프레임 저하가 확실하게 눈에 띄게 됨

#### 해결 과정 및 방법 ✨

화면에 보이는 캠핑장 데이터만 랜더링 할수있 게 조치를 하였고, 줌 레벨에 따른 마커 수를 동적으로 조절하는 `LOD(Level of Detail)`개념을 도입해 적용을 시킴 그 결과 프레임 저하 현상이 사라지고 높은 프레임을 유지한 상태로 랜더링이 되었음

- 스크린 내에서 보이는 데이터만 필터링 적용

```js
// 스크린 내에서 마커 필터링 함수
const createElementsInScreenSize = () => {
  if (!mapRef.current) return [];
  const mapBounds = mapRef.current.getBounds(); // 스크린의 꼭짓점 내에 해당하는 마커만 필터링
  const coordinatesInScreenSize = campsites.filter((camp) => {
    const { latlng } = camp;

    return (
      latlng.lat <= mapBounds.pa &&
      latlng.lat >= mapBounds.qa &&
      latlng.lng <= mapBounds.oa &&
      latlng.lng >= mapBounds.ha
    );
  });
  setFilteredCampsites(coordinatesInScreenSize);
};

useEffect(() => {
  createElementsInScreenSize(); // 맵이 로드될 때 필터링
}, [campsites, location]); // 캠핑장 데이터나 위치가 변경될 때마다 필터링
```

- LOD(Level of Detail) 적용

```js
// LOD에 따라 마커 필터링
const filterCampsitesByZoomLevel = (zoomLevel) => {
  if (zoomLevel >= 11) {
    return campsites.filter((_, index) => index % 11 === 0); // 11개마다 하나씩 표시
  } else if (zoomLevel >= 10) {
    return campsites.filter((_, index) => index % 9 === 0); // 9개마다 하나씩 표시
  } else if (zoomLevel >= 9) {
    return campsites.filter((_, index) => index % 7 === 0); // 7개마다 하나씩 표시
  } else {
    return campsites;
  }
};
```