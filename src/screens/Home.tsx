import React from 'react';
import { View, TextInput, FlatList, StyleSheet, Text } from 'react-native';
import { CityItem } from '../components/CityItem';
import { useHomeController } from '../view-controller/useHomeController';

const Home = () => {
    const {
        searchQuery,
        setSearchCity,
        searchResults,
        lastSearched,
        loading,
        error,
        handleCityPress,
    } = useHomeController();
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput
                placeholder="Search city..."
                value={searchQuery}
                onChangeText={setSearchCity}
                style={styles.input}
            />

            {error && <Text style={styles.error}>{error}</Text>}

            <FlatList
                data={searchQuery ? searchResults : lastSearched}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <CityItem
                        city={item}
                        onPress={() => handleCityPress(item)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
    error: {
        color: 'red',
        marginBottom: 8,
    },
});

export default Home;