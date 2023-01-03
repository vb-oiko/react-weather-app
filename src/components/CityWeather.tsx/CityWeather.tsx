import { WeatherIcon } from "../WeatherIcon/WeatherIcon";

import styles from "./CityWeather.module.css";

export const CityWeather = () => {
  const curWeather = {
    cityAndCountry: "Tallinn, EE",
    condDescr: "snow",
    humidity: 80,
    pressure: 1000,
    windSpeed: 5,
    date: "2023-01-03",
    temp: -1,
  };

  const starred = true;
  console.warn(styles);

  return (
    <div className={styles.card}>
      <div className={styles.leftColumn}>
        <div className={styles.cityName}>{curWeather.cityAndCountry}</div>
        <div className={`${styles.starredIcon} ${styles.starred}`}></div>
        <div className={styles.conditions}>{curWeather.condDescr}</div>
        <div className={styles.humidity}>
          Humidity {curWeather.humidity} | Pressure {curWeather.pressure} hpa |
          Wind Speed {curWeather.windSpeed} m/s
        </div>
      </div>
      <div className={styles.mainIcon}>
        <WeatherIcon></WeatherIcon>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.date}>{curWeather.date}</div>
        <div className={styles.temperature}>{curWeather.temp}&deg;C</div>
      </div>
    </div>
  );
};
