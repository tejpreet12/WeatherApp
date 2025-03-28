import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useCityDetailsController } from '../view-controller/useCityDetailsController';

const CityDetails = () => {
    const { weatherData, loading, error, lastUpdated } = useCityDetailsController();

    if (loading && !weatherData) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }

    if (!weatherData) {
        return (
            <View style={styles.container}>
                <Text style={styles.noData}>No weather data available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.cityName}>{weatherData.name}</Text>

            <View style={styles.weatherMain}>
                <Text style={styles.temp}>{Math.round(weatherData.temp)}°C</Text>
                <Text style={styles.conditions}>{weatherData.conditions}</Text>
            </View>

            <View style={styles.detailsCard}>
                <Text style={styles.detailTitle}>Weather Details</Text>

                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Feels Like:</Text>
                    <Text style={styles.detailValue}>{Math.round(weatherData.temp)}°C</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Humidity:</Text>
                    <Text style={styles.detailValue}>{weatherData.humidity}%</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Wind Speed:</Text>
                    <Text style={styles.detailValue}>{weatherData.windSpeed} km/h</Text>
                </View>

                {lastUpdated && (
                    <Text style={styles.updateText}>
                        Last updated: {new Date(lastUpdated).toLocaleTimeString()}
                    </Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    cityName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
        color: '#333',
    },
    weatherMain: {
        alignItems: 'center',
        marginBottom: 24,
    },
    temp: {
        fontSize: 48,
        fontWeight: '300',
        color: '#2d3436',
    },
    conditions: {
        fontSize: 20,
        color: '#636e72',
    },
    detailsCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    detailTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2d3436',
        marginBottom: 16,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    detailLabel: {
        fontSize: 16,
        color: '#636e72',
    },
    detailValue: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2d3436',
    },
    updateText: {
        marginTop: 16,
        fontSize: 12,
        color: '#b2bec3',
        textAlign: 'right',
    },
    error: {
        color: '#e74c3c',
        textAlign: 'center',
        marginTop: 20,
    },
    noData: {
        textAlign: 'center',
        color: '#636e72',
        marginTop: 20,
    },
});

export default CityDetails;