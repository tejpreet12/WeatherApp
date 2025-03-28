import { useEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useWeatherViewModel } from '../view-modals/useWeatherViewModal';
import { RootStackParamList } from '../navigation/RootStackParamList';

export const useCityDetailsController = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'CityDetails'>>();
 const { city } = route.params; 
  const vm = useWeatherViewModel();

  useEffect(() => {
    vm.fetchWeather(city);
  }, [city]);

  return {
    weatherData: vm.currentCity,
    loading: vm.loading,
    error: vm.error,
    lastUpdated: vm.currentCity?.lastUpdated,
  };
};