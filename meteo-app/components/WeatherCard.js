import React from 'react';
import { StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { colors } from "../utils/colors";


const WeatherCard = (props) => {

    const goToCity = () => {
        props.navigation.navigate("City", {
            data: props.data
        }
        )
    }


    return (
        <TouchableOpacity onPress={goToCity} style={styles.card}>
            <Text style={styles.title}>{props.data.city.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 60,
        width: "80%",
        backgroundColor: Platform.OS === "ios" ? colors.mainOrange : "white",
        shadowColor: "black",
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        marginBottom: 20,
        borderRadius: 2,
        justifyContent: "center",   //asse y
        alignItems: "center",        //asse x children
        elevation: 12,
        borderRadius: 10,

    },
    title: {
        color: 'black',
        fontSize: 22,
    }
})


export default WeatherCard