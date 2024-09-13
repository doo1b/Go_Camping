import { useKakaoMap } from "../../hooks/useKakaoMap";
import KakaoMap from "../../components/mainpage/KakaoMap";
import WeatherDisplay from "../../components/mainpage/WeatherDisplay";
import LocationDisplay from "../../components/mainpage/LocationDisplay";
import SearchDisplay from "../../components/mainpage/SearchDisplay";

const MainPage = () => {
  const { kakaoMap, currentLocation, setInitialLocation } = useKakaoMap();

  const onCurrentLocation = () => {
    setInitialLocation(kakaoMap, currentLocation);
  };

  return (
    <section className="font-preten400 text-sm">
      <KakaoMap />
      <LocationDisplay onCurrentLocation={onCurrentLocation}/>
      <WeatherDisplay />
      <SearchDisplay />
    </section>
  );
};

export default MainPage;
