import { CityWeather } from "../types/stateTypes";

export type RootStackParamList = {
    Home: undefined;
    CityDetails: { 
        city: CityWeather; 
    };
}