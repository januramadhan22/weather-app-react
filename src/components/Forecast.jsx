import React from "react";

function Forecast() {
  const hour = [1, 2, 3, 4, 5];
  const day = ["Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="w-7/12 flex flex-col gap-5 text-white">
      {/* Hourly Forecast */}
      <div className="w-full flex flex-col gap-2">
        <h2>HOURLY FORECAST</h2>
        <hr />
        <div className="w-full flex flex-row justify-between items-center">
          {hour.map((hr) => (
            <div
              key={hr}
              className="w-fit flex flex-col items-center text-sm font-light"
            >
              <p>02:00 PM</p>
              <img
                className="w-12"
                src="http://openweathermap.org/img/wn/04n.png"
                alt=""
              />
              <p>19&deg;C</p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Forecast */}
      <div className="w-full flex flex-col gap-2">
        <h2>DAILY FORECAST</h2>
        <hr />
        <div className="w-full flex flex-row justify-between items-center">
          {day.map((day) => (
            <div
              key={day}
              className="w-fit flex flex-col items-center text-sm font-light"
            >
              <p>{day}</p>
              <img
                className="w-12"
                src="http://openweathermap.org/img/wn/04n.png"
                alt=""
              />
              <p>19&deg;C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
