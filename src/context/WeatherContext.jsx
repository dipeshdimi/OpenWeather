import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem('city') || 'Delhi');
  const [unit, setUnit] = useState('metric')
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const fetchWeather = async (cityName) => {
    try {
      setError(null);
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${unit}`
      )
      setWeather(weatherResponse.data)
      localStorage.setItem('city', cityName)

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=${unit}`
      )
      setForecast(forecastResponse.data.list.filter((_, index) => index % 8 === 0))
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchWeather(city)
    const interval = setInterval(() => {
      fetchWeather(city)
    }, 30000)

    return () => clearInterval(interval)
  }, [city, unit])

  return (
    <WeatherContext.Provider value={{ weather, forecast, error, setCity, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  )
}

WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WeatherProvider
