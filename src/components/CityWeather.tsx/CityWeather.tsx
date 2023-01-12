import WeatherIcon from "../WeatherIcon/WeatherIcon";

import styles from "./CityWeather.module.css";

type CityWeatherProps = {
  city?: string;
  date?: string;
};

const CityWeather: React.FC<CityWeatherProps> = ({
  city = "Tallinn, EE",
  date = "2023-01-01",
}) => {
  const curWeather = {
    cityAndCountry: city,
    condDescr: "snow",
    humidity: 80,
    pressure: 1000,
    windSpeed: 5,
    date,
    temp: -1,
  };

  const starred = true;

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

export default CityWeather;
