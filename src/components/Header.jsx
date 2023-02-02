import React from "react";

function Header({ setQuery }) {
  const cities = [
    { id: 1, name: "London" },
    { id: 2, name: "Jakarta" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "Berlin" },
    { id: 5, name: "Abu Dhabi" },
  ];

  return (
    <div className="w-full flex flex-row gap-8 justify-center">
      {cities.map((city) => (
        <button
          onClick={() => setQuery({ q: city.name })}
          key={city.id}
          className="font-semibold text-gray-200 hover:text-white transition ease-linear"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default Header;
