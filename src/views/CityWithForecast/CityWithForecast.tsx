import { useParams } from "react-router-dom";
import CityWeather from "../../components/CityWeather.tsx/CityWeather";
import Header from "../../components/Header/Header";
import WeekForecast from "../../components/WeekForecast/WeekForecast";

interface CityWithForecastProps {
  title?: string;
}

const CityWithForecast: React.FC<CityWithForecastProps> = ({ title }) => {
  const { city, date } = useParams();
  return (
    <div>
      <Header />
      <CityWeather city={city} />
      {city ? <WeekForecast city={city} /> : null}
      <p>{date}</p>
    </div>
  );
};

export default CityWithForecast;
