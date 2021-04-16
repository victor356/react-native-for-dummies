import React from "react";
import { StyleSheet, View, Text, Button, Dimensions, Platform } from "react-native";
import WeatherIcon from "./WeatherIcon";
const WeatherDay = props => {
    const dayOfWeek = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"];
    const indexDay = new Date(props.data.dt_txt).getDay();
    const day = dayOfWeek[indexDay];
    const temperature = Math.floor(props.data.main.temp - 273.15);
    const icon = props.data.weather[0].icon;


    return (
        <View style={styles.container}>
            <View style={{width:100}}>
                <Text style={styles.day}>{day}</Text>
            </View>
            <WeatherIcon code={icon} />
            <View style={{width:50}}>
            <Text style={styles.temperature}>{temperature}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        
    },
    day: {
        marginLeft: 5,
        fontSize: Dimensions.get("window").height > 600 ? 20 : 16
    },
    temperature: {
        marginRight: 5,
        fontSize: Dimensions.get("window").height > 600 ? 22 : 18    }
})
export default WeatherDay;