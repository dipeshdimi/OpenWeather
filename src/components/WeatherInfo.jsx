import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { capitalizeFirstLetter } from '../utils/CapitalizeFirstLetter';
import styles from '../styles/WeatherInfo.module.css'

const WeatherInfo = () => {
  const { error, unit, weather } = useContext(WeatherContext)

  if (error) return null;

  if (!weather) return <p>Loading weather data...</p>

  return (
    <div className={styles.weatherInfo}>
      <h2>{weather.name}</h2>
      <p>{capitalizeFirstLetter(weather.weather[0].description)}</p>
      <p>Temperature: {weather.main.temp}{unit === 'metric' ? '°C' : '°F'}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
      />
    </div>
  )
}

export default WeatherInfo
