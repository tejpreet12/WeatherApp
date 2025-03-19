import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityWeather, WeatherState } from '../types/stateTypes';

const initialState: WeatherState = {
  searchResults: [],
  currentCity: null,
  loading: false,
  error: null,
  searchQuery: '',
  lastSearched: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setSearchResults(state, action: PayloadAction<CityWeather[]>) {
      state.searchResults = action.payload;
    },
    setCurrentCity(state, action: PayloadAction<CityWeather>) {
      state.currentCity = action.payload;
      state.lastSearched = [action.payload];
    },
    clearSearchResults(state) {
      state.searchResults = [];
      state.currentCity =  null;
      state.loading= false;
      state.error= null;
      state.searchQuery= '';
    },
  },
});

export const { 
  setSearchQuery,
  setLoading,
  setError,
  setSearchResults,
  setCurrentCity,
  clearSearchResults,
} = weatherSlice.actions;

export default weatherSlice.reducer;