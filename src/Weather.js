import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
 
    let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    setLoaded(true);
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setMessage({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (loaded) {
    return (
      <div className="body">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
          />
          <button type="Submit" className="button">
            Search
          </button>
        </form>
        <ul>
          <li>Temperature: {Math.round(message.temperature)}°C</li>
          <li>Description: {message.description}</li>
          <li>Humidity: {message.humidity}%</li>
          <li>Wind: {message.wind}km/h</li>
        </ul>
        <img src={message.icon} alt={message.description} />
      </div>
    );
  } else {
    return (
      <div className="body">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
          />
          <button type="Submit">Search</button>
        </form>
      </div>
    );
  }
  
  
}
