import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function SearchForm({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocalLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleChangeUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };

  return (
    <div className="w-full flex flex-row justify-center items-center gap-5">
      <div className="flex items-center gap-2">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search City . . ."
          className="w-full md:w-60 px-3 py-2 rounded-md text-sm text-gray-500 border focus:border-cyan-600  focus:outline-none transition ease-linear duration-150"
        />
        <UilSearch
          onClick={handleSearch}
          size={20}
          className="text-gray-100 hover:text-white hover:scale-125 cursor-pointer transition ease-linear duration-150"
        />
        <UilLocationPoint
          onClick={handleLocalLocation}
          size={20}
          className="text-gray-100 hover:text-white hover:scale-125 cursor-pointer transition ease-linear duration-150"
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleChangeUnits}
          name="metric"
          className={`text-lg font-medium text-gray-100 hover:text-white hover:scale-125 cursor-pointer transition ease-linear duration-150 ${
            units === "metric" && "text-orange-300 hover:text-orange-300"
          }`}
        >
          &deg;C
        </button>
        <span className="h-5 w-[1px] bg-gray-200 rounded-sm"></span>
        <button
          onClick={handleChangeUnits}
          name="imperial"
          className={`text-lg font-medium text-gray-100 hover:text-white hover:scale-125 cursor-pointer transition ease-linear duration-150 ${
            units === "imperial" && "text-orange-300 hover:text-orange-300"
          }`}
        >
          &deg;F
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
