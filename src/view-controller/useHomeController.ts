import { useEffect } from 'react';
import { useWeatherViewModel } from '../view-modals/useWeatherViewModal';
import { useNavigation } from '@react-navigation/native';
import { CityWeather } from '../types/stateTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList';

export const useHomeController = () => {
  const vm = useWeatherViewModel();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (vm.searchQuery.length >= 1) {
      const debounce = setTimeout(() => {
        vm.searchCities(vm.searchQuery);
      }, 500);
      return () => clearTimeout(debounce);
    } else {
      vm.clearSearchResults();
    }
  }, [vm.searchQuery]);

  const handleCityPress = (city: CityWeather) => {
    vm.fetchWeather(city);
  navigation.navigate('CityDetails', {
    city: city,
  });
  };

  return {
    searchQuery: vm.searchQuery,
    setSearchCity: vm.setSearchCity,
    searchResults: vm.searchResults,
    lastSearched: vm.lastSearched,
    loading: vm.loading,
    error: vm.error,
    handleCityPress,
  };
};