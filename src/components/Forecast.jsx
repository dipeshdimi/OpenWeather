import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { capitalizeFirstLetter } from '../utils/CapitalizeFirstLetter'
import styles from '../styles/Forecast.module.css'

const Forecast = () => {
  const { error, forecast } = useContext(WeatherContext)

  if (error) return null;

  if (!forecast) return <p>Loading forecast...</p>

  return (
    <div className={styles.forecast}>
      <h3>5-Day Forecast</h3>
      <div className={styles.forecastList}>
        {forecast.map((day, index) => (
          <div key={index} className={styles.forecastItem}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={capitalizeFirstLetter(day.weather[0].description)}
            />
            <p>{capitalizeFirstLetter(day.weather[0].description)}</p>
            <p>Temp: {day.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
