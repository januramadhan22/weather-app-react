import { DateTime } from "luxon";
import { API_KEY } from "../apiKey";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { city, list } = data;
  let hourly = data.list;
  let weekly = data.list;

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatLocalTime(d.dt, city.timezone, "hh:mm a"),
      temp: d.main.temp,
      icon: d.weather[0].icon,
      status: d.weather[0].main,
    };
  });

  weekly = weekly.map((d) => {
    return {
      title: formatLocalTime(d.dt, city.timezone, "ccc"),
      temp: d.main.temp,
      icon: d.weather[0].icon,
    };
  });

  return { city, weekly, hourly };
};

const getFormatedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}.png`;

export default getFormatedWeatherData;

export { formatLocalTime, iconUrl };
