import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ms, mvs } from '../utils/ScalingUtils';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Weather</Text>
            <TextInput style={styles.textInput} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: ms(10)
    },
    textHeader: {
        fontSize: mvs(20),
        fontWeight: 'bold',

    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '90%',
        height: mvs(40),
        alignSelf: 'center',
        marginVertical: mvs(10),
        paddingHorizontal: mvs(10),
        borderRadius: mvs(5),

    }
})