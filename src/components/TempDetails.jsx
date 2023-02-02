import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { formatLocalTime, iconUrl } from "../utils/services/service";

function TempDetails({
  units,
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-white text-lg">{details}</h2>
      <div className="w-full flex flex-row justify-between items-center gap-10">
        <div className="w-1/3 flex items-center justify-center">
          <img className="w-20" src={iconUrl(icon)} alt={details} />
        </div>
        <h1 className="w-1/3 text-4xl text-center text-white font-light">
          {temp.toFixed()}&deg;{units === "metric" ? "C" : "F"}
        </h1>
        <div className="w-1/3 flex flex-col items-start gap-1 text-sm text-white font-light">
          <div className="flex items-center gap-0.5">
            <UilTemperature size={18} />
            Real Feel:{" "}
            <span className="font-medium">
              {feels_like.toFixed()}&deg;{units === "metric" ? "C" : "F"}
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <UilTear size={18} />
            Humidity: <span className="font-medium">{humidity.toFixed()}%</span>
          </div>
          <div className="flex items-center gap-0.5">
            <UilWind size={18} />
            Wind: <span className="font-medium">{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 text-sm text-white font-light">
        <div className="flex items-center gap-1">
          <UilSun size={18} />
          Rise:
          <span span className="font-medium">
            {formatLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </div>
        <span className="h-4 w-[1px] bg-gray-200 rounded-sm"></span>
        <div className="flex items-center gap-1">
          <UilSunset size={18} />
          Set:
          <span span className="font-medium">
            {formatLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </div>
        <span className="h-4 w-[1px] bg-gray-200 rounded-sm"></span>
        <div className="flex items-center gap-1">
          <UilArrowUp size={18} />
          High:
          <span span className="font-medium">
            {temp_max.toFixed()}&deg;{units === "metric" ? "C" : "F"}
          </span>
        </div>
        <span className="h-4 w-[1px] bg-gray-200 rounded-sm"></span>
        <div className="flex items-center gap-1">
          <UilArrowDown size={18} />
          Low:
          <span span className="font-medium">
            {temp_min.toFixed()}&deg;{units === "metric" ? "C" : "F"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TempDetails;
