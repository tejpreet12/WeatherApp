import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CityWeather } from '../types/stateTypes';

type Props = {
  city: CityWeather;
  onPress: () => void;
};

export const CityItem = ({ city, onPress }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.name}>{city.name}</Text>
    <Text style={styles.temp}>{Math.round(city.temp)}°C</Text>
    <Text style={styles.conditions}>{city.conditions}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' },
  name: { fontSize: 16, fontWeight: 'bold' },
  temp: { fontSize: 14, color: '#666' },
  conditions: { fontSize: 12, color: '#888' },
});