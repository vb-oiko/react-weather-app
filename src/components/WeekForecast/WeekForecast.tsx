import DayForecast from "../DayForecast/DayForecast";
import styles from "./WeekForecast.module.css";

type WeekForecastProps = {
  city: string;
};

const WeekForecast: React.FC<WeekForecastProps> = ({ city }) => {
  return (
    <div className={styles.wrap}>
      <DayForecast date="2023-01-11" city={city} />
      <DayForecast date="2023-01-12" city={city} />
      <DayForecast date="2023-01-13" city={city} />
      <DayForecast date="2023-01-14" city={city} />
      <DayForecast date="2023-01-15" city={city} />
    </div>
  );
};

export default WeekForecast;
