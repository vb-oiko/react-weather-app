import "./App.css";
import { CityList } from "./views/CityList/CityList";
import Home from "./views/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CityWithForecast from "./views/CityWithForecast/CityWithForecast";
import Error from "./views/Error/Error";
import CityWeatherView from "./views/CityWeatherView/CityWeatherView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <CityList />,
  },
  {
    path: "/city",
    element: <Home />,
  },
  {
    path: "/city/:city",
    element: <CityWithForecast />,
  },
  {
    path: "/city/:city/:date",
    element: <CityWeatherView />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
