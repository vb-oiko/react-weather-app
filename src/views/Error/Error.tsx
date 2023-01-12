import CityWeather from "../../components/CityWeather.tsx/CityWeather";
import Header from "../../components/Header/Header";
import WeekForecast from "../../components/WeekForecast/WeekForecast";

function Error() {
  return (
    <div>
      <Header />
      <h1>Oops</h1>
      <p>We haven't found anything</p>
    </div>
  );
}

export default Error;
