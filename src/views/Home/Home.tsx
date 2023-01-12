import CityWeather from "../../components/CityWeather.tsx/CityWeather";
import Header from "../../components/Header/Header";
import WeekForecast from "../../components/WeekForecast/WeekForecast";

function Home() {
  return (
    <div>
      <Header />
      <CityWeather />
      <WeekForecast city="Kyiv"/>
    </div>
  );
}

export default Home;
