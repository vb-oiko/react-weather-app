import "./App.css";
import { CityWeather } from "./components/CityWeather.tsx/CityWeather";
import { Header } from "./components/Header/Header";
import { WeekForecast } from "./components/WeekForecast/WeekForecast";

function App() {
  return (
    <div className="App">
      <Header />
      <CityWeather />
      <WeekForecast />
    </div>
  );
}

export default App;
