import React from "react";
import Slider from "react-slick";
import { iconUrl } from "../utils/services/service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Forecast({ units, hourly, weekly }) {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
  };

  return (
    <div className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 flex flex-col gap-5 text-white">
      {/* Hourly Forecast */}
      <div className="w-full flex flex-col gap-2">
        <h2>FORECAST FOR 3 HOUR</h2>
        <hr />
        <div className="w-full flex flex-row justify-between items-center">
          {hourly.map((item) => (
            <div
              key={item}
              className="w-fit flex flex-col items-center text-sm font-light"
            >
              <p>{item.title}</p>
              <img
                className="w-12"
                src={iconUrl(item.icon)}
                alt={item.status}
              />
              <p>
                {item.temp.toFixed()}&deg;{units === "metric" ? "C" : "F"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Forecast */}
      <div className="w-full flex flex-col gap-2">
        <h2>WEEKLY FORECAST</h2>
        <hr />
        <Slider {...settings}>
          {weekly.map((item) => (
            <div
              key={item}
              className="w-fit flex flex-col items-center text-sm font-light text-center"
            >
              <p>{item.title}</p>
              <div className="flex justify-center">
                <img
                  className="w-12"
                  src={iconUrl(item.icon)}
                  alt={item.status}
                />
              </div>
              <p>
                {item.temp.toFixed()}&deg;{units === "metric" ? "C" : "F"}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Forecast;
