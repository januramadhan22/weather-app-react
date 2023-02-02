import React from "react";
import { formatLocalTime } from "../utils/services/service";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="max-w-full flex flex-col gap-5 items-center">
      <div className="text-white font-light">
        <p className="text-lg font-extralight">
          {formatLocalTime(dt, timezone)}
        </p>
      </div>
      <h1 className="text-white text-3xl ">
        {name}, {country}
      </h1>
    </div>
  );
}

export default TimeAndLocation;
