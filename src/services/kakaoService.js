// const { kakao } = window;

// 초기 맵 생성
// const initialMap = () => {
//   return new Promise((resolve) => {
//     const container = document.getElementById("map");
//     const options = {
//       center: new kakao.maps.LatLng(33.450701, 126.570667),
//       level: 3
//     };
//     const map = new kakao.maps.Map(container, options);

//     // 현재 위치 저장
//     let locPosition = null;

//     // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
//     if (navigator.geolocation) {
//       // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//       navigator.geolocation.getCurrentPosition((position) => {
//         let lat = position.coords.latitude; // 위도
//         let lon = position.coords.longitude; // 경도

//         locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//         setInitialLocation(map, locPosition);
//         resolve({ map, locPosition });
//       });
//     } else {
//       // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
//       locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
//       setInitialLocation(map, locPosition);
//       resolve({ map, locPosition });
//     }
//   });
// };

// 현재 위치 마커 찍기
// const setInitialLocation = (map, locPosition) => {
//   // 마커를 생성합니다
//   const marker = new kakao.maps.Marker({
//     position: locPosition,
//     map: map.setLevel(3)
//   });

//   // 지도 이동 (부드럽게)
//   map.panTo(locPosition);
//   // 지도 중심좌표를 접속위치로 변경합니다
//   marker.setMap(map);
// };

const getCurrentLocation = (setLocation) => {
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation((prev) => ({
          ...prev,
          center: {
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude // 경도
          },
          position: {
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude // 경도
          },
          isLoading: false
        }));
      },
      (err) => {
        setLocation((prev) => ({
          ...prev,
          errMsg: err.message,
          isLoading: false
        }));
      }
    );
  } else {
    // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    setLocation((prev) => ({
      ...prev,
      errMsg: "geolocation을 사용할수 없어요..",
      isLoading: false
    }));
  }
};

const kakaoService = {
  getCurrentLocation
};

export default kakaoService;
