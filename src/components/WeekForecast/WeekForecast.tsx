import { DayForecast } from "../DayForecast/DayForecast";
import styles from "./WeekForecast.module.css";

export const WeekForecast = () => {
  return (
    <div className={styles.wrap}>
      <DayForecast />
      <DayForecast />
      <DayForecast />
      <DayForecast />
      <DayForecast />
    </div>
  );
};
