import React from "react";
import { UilTemperature, UilTear, UilWind } from "@iconscout/react-unicons";

function TempDetails() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-white text-lg">Cloudy</h2>
      <div className="w-full flex flex-row justify-between items-center gap-10">
        <div className="w-1/3 flex items-center justify-center">
          <img
            className="w-20"
            src="http://openweathermap.org/img/wn/04n.png"
            alt=""
          />
        </div>
        <h1 className="w-1/3 text-4xl text-center text-white font-light">
          19&deg;C
        </h1>
        <div className="w-1/3 flex flex-col items-start gap-1 text-sm text-white font-light">
          <div className="flex items-center gap-0.5">
            <UilTemperature size={18} />
            Real Felt: <span className="font-medium">18&deg;C</span>
          </div>
          <div className="flex items-center gap-0.5">
            <UilTear size={18} />
            Humidity: <span className="font-medium">50%</span>
          </div>
          <div className="flex items-center gap-0.5">
            <UilWind size={18} />
            Wind: <span className="font-medium">4 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 text-sm text-white font-light">
        <div>
          Rise:{" "}
          <span span className="font-medium">
            04:50 AM
          </span>
        </div>
        <span className="h-4 w-[1px] bg-gray-200 rounded-sm"></span>
        <div>
          Set:{" "}
          <span span className="font-medium">
            04:50 AM
          </span>
        </div>
        <span className="h-4 w-[1px] bg-gray-200 rounded-sm"></span>
        <div>
          High:{" "}
          <span span className="font-medium">
            21&deg;C
          </span>
        </div>
        <span className="h-4 w-[1px] bg-gray-200 rounded-sm"></span>
        <div>
          Low:{" "}
          <span span className="font-medium">
            21&deg;C
          </span>
        </div>
      </div>
    </div>
  );
}

export default TempDetails;
