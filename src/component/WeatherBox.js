import React from "react";

const WeatherBox = ({ weather, cityName }) => {
  console.log("weather", weather);
  const cellsius = weather?.main.temp.toFixed(0);
  const fahrenheit = (cellsius * 1.8 + 32).toFixed(0);
  const weatherDescription = weather?.weather[0].description;
  // const weatherIcon = weather?.weather[0].icon;
  // const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`;

  return (
    <div className="weather-box">
      <div>{cityName}</div>
      <h2>
        {cellsius}°C / {fahrenheit}°F
      </h2>
      {/* <img src={iconUrl} alt="weather icon" /> */}
      <h3>{weatherDescription}</h3>
    </div>
  );
};

export default WeatherBox;
