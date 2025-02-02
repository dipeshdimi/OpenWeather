import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import styles from '../styles/ErrorMessage.module.css'

const ErrorMessage = () => {
  const { error } = useContext(WeatherContext);

  if (!error) return null;

  return <div className={styles.error}>{error}</div>
}

export default ErrorMessage
