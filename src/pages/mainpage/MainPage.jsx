import { useKakaoMap } from "../../hooks/useKakaoMap";
import KakaoMap from "../../components/mainpage/KakaoMap";
import WeatherDisplay from "../../components/mainpage/WeatherDisplay";
import LocationDisplay from "../../components/mainpage/LocationDisplay";
import SearchDisplay from "../../components/mainpage/SearchDisplay";

const MainPage = () => {
  const { location, setLocation, getCurrentLocation } = useKakaoMap();

  return (
    <section className="font-preten400 text-sm">
      <KakaoMap location={location} setLocation={setLocation}/>
      <LocationDisplay getCurrentLocation={getCurrentLocation} />
      <WeatherDisplay />
      <SearchDisplay />
    </section>
  );
};

export default MainPage;
