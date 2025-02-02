import './styles/App.css';
import WeatherProvider from './context/WeatherContext';
import SearchInput from './components/SearchInput';
import WeatherInfo from './components/WeatherInfo';
import ErrorMessage from './components/ErrorMessage';
import Forecast from './components/Forecast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WeatherProvider>
      <div className="App">
        <h1>Weather Dashboard</h1>
        <SearchInput />
        <WeatherInfo />
        <Forecast />
        <ErrorMessage />
      </div>

    </WeatherProvider>
  </QueryClientProvider>
);

export default App;
