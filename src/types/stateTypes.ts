export interface CityWeather {
    name: string;
    temp: number;
    humidity: number;
    windSpeed: number;
    conditions: string;
    lat: number;
    lon: number;
    lastUpdated: number;
  }
  
  export interface WeatherState {
    searchResults: CityWeather[];
    currentCity: CityWeather | null;
    loading: boolean;
    error: string | null;
    searchQuery: string;
    lastSearched: CityWeather[];
  }