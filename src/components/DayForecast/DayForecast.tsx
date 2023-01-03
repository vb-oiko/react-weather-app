import { WeatherIcon } from "../WeatherIcon/WeatherIcon";

import styles from "./DayForecast.module.css";

export const DayForecast = () => {
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
    </div>
  );
};
