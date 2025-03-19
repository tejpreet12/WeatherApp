import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { CityWeather } from '../types/stateTypes';
import { 
  setSearchQuery,
  setLoading,
  setError,
  setSearchResults,
  setCurrentCity,
  clearSearchResults,
} from '../store/weatherSlice';

const API_KEY = 'V35HZWCV25N4YS2PQH4LG7WPG';

export const useWeatherViewModel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.weather);

  const searchCities = async (query: string) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?key=${API_KEY}`
      );
      
      const data = await response.json();
      const mappedResults: CityWeather[] = [{
        name: data.resolvedAddress,
        temp: data.currentConditions.temp,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed,
        conditions: data.currentConditions.conditions,
        lat: data.latitude,
        lon: data.longitude,
        lastUpdated: Date.now(),
      }];

      dispatch(setSearchResults(mappedResults));
    } catch (err) {
      dispatch(setError('Failed to fetch weather data'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchWeather = async (city: CityWeather) => {
    dispatch(setCurrentCity(city));
  };

  const setSearchCity = (city:string) => {
    dispatch(setSearchQuery(city))
  }

  return {
    ...state,
    searchCities,
    fetchWeather,
    clearSearchResults,
    setSearchCity,
  };
};