import { useParams } from "react-router-dom";
import CityWeather from "../../components/CityWeather.tsx/CityWeather";
import Header from "../../components/Header/Header";
import WeekForecast from "../../components/WeekForecast/WeekForecast";

interface CityWeatherViewProps {
  title?: string;
}

const CityWeatherView: React.FC<CityWeatherViewProps> = ({ title }) => {
  const { city, date } = useParams();
  return (
    <div>
      <Header />
      <CityWeather city={city} date={date} />
    </div>
  );
};

export default CityWeatherView;
