import React from "react";
import CityWeather from "../../components/CityWeather.tsx/CityWeather";
import Header from "../../components/Header/Header";

export type CityListProps = {};

export const CityList: React.FC<CityListProps> = () => {
  const cities = ["Tallinn", "Kyiv", "Warsaw", "Prague"];
  return (
    <>
      <Header />

      {cities.map((city) => (
        <CityWeather key={city} />
      ))}
    </>
  );
};
