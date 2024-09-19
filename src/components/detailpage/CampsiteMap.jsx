import { Map, MapMarker } from 'react-kakao-maps-sdk'

const CampsiteMap = ({ lat, lng }) => {
  return (
    <> 
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: lat,
          lng: lng,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "400px",
        }}
        level={4} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: lat,
            lng: lng,
          }}
        />
      </Map>
    </>
  )
}

export default CampsiteMap