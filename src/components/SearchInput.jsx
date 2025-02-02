import { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import styles from '../styles/SearchInput.module.css';

const SearchInput = () => {
  const { unit, setUnit, setCity } = useContext(WeatherContext);
  const [cityName, setCityName] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (cityName.trim()) {
      setCity(cityName);
      setCityName('');
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city"
        className={styles.input}
      />
      <div>
        <button type="submit" className={styles.button}>
          Search
        </button>
        <button
          className={styles.button}
          onClick={() => setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'))}
        >
          Switch to {unit === 'metric' ? 'Fahrenheit' : "Celcius"}
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
