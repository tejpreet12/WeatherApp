import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CityDetails, Home } from '../screens';


const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CityDetails" component={CityDetails} />
        </Stack.Navigator>
    );
};

export default AppNavigator;