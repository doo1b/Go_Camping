import KakaoMap from "../../components/mainpage/KakaoMap";
import WeatherDisplay from "../../components/mainpage/WeatherDisplay";
import LocationDisplay from "../../components/mainpage/LocationDisplay";
import SearchDisplay from "../../components/mainpage/SearchDisplay";
import SideBar from "../../components/mainpage/SideBar";

const MainPage = () => {
  return (
    <section className="font-preten400 text-sm">
      <KakaoMap />
      <SideBar />
      <LocationDisplay />
      <WeatherDisplay />
      <SearchDisplay />
    </section>
  );
};

export default MainPage;
