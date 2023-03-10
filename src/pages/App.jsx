import React, { useEffect, useState } from "react";
import Forecast from "../components/Forecast";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import TempDetails from "../components/TempDetails";
import TimeAndLocation from "../components/TimeAndLocation";
import getFormatedWeatherData from "../utils/services/service";

function App() {
  const [query, setQuery] = useState({ q: "surabaya" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormatedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="min-h-screen max-w-screen-xl flex justify-center items-center py-5">
      <div className="mx-auto w-11/12 sm:w-10/12 lg:w-6/12 h-full bg-gradient-to-br from-cyan-300 to-blue-600 rounded-md shadow-md flex flex-col items-center gap-5 p-4 md:p-5">
        <Header setQuery={setQuery} />
        <SearchForm setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div className="w-full flex flex-col items-center gap-5">
            <TimeAndLocation weather={weather} />
            <TempDetails units={units} weather={weather} />
            <Forecast
              units={units}
              hourly={weather.hourly}
              weekly={weather.weekly}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
