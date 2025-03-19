import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CityWeather, Home } from '../screens';


const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CityWeather" component={CityWeather} />
        </Stack.Navigator>
    );
};

export default AppNavigator;