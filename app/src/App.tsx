import React, { useEffect } from "react";
import { Container, Textfield, WeatherWidget } from "./components";
import axios from "axios";

function App() {
  const getWeather = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    console.log(response);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return <WeatherWidget />;
}

export default App;
