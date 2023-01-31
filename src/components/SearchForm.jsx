import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function SearchForm() {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-5">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search City . . ."
          className="w-60 px-3 py-2 rounded-md text-sm border focus:border-cyan-600  focus:outline-none transition ease-linear duration-150"
        />
        <UilSearch
          size={20}
          className="text-gray-100 hover:text-white hover:scale-125 cursor-pointer transition ease-linear duration-150"
        />
        <UilLocationPoint
          size={20}
          className="text-gray-100 hover:text-white hover:scale-125 cursor-pointer transition ease-linear duration-150"
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="text-lg font-medium text-gray-100 hover:text-white hover:scale-125 cursor-pointer transition ease-linear duration-150">
          &deg;C
        </button>
        <span className="h-5 w-[1px] bg-gray-200 rounded-sm"></span>
        <button className="text-lg font-medium text-gray-100 hover:text-white hover:scale-125 cursor-pointer transition ease-linear duration-150">
          &deg;F
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
