import { Link } from "react-router-dom";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

import styles from "./DayForecast.module.css";

interface DayForecastProps {
  date: string;
  city: string;
}

const DayForecast: React.FC<DayForecastProps> = ({ date, city }) => {
  const weather = {
    date: "",
    condDescr: "",
    temp: 0,
  };

  return (
    <div className={styles.card}>
      <div className={styles.day}>{weather.date}</div>
      <div className={styles.icon}>
        <WeatherIcon></WeatherIcon>
      </div>
      <div className={styles.temperature}>{weather.temp}&deg;C</div>
      <Link to={`/city/${city}/${date}`}>{date}</Link>
    </div>
  );
};

export default DayForecast;
