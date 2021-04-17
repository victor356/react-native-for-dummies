import React from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import WeatherIcon from "./WeatherIcon";

const WeatherTime = props => {

    const temperature = Math.floor(props.data.main.temp - 273.15);
    //const temp =new Date(props.data.dt_txt);
    //const time = parseFloat(temp.getHours());

    let dateParam = props.data.dt_txt.split(/[\s-:]/);
    dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString();
    const ret = new Date(...dateParam);
    
    const time = dateParam[3];
    
    const icon = props.data.weather[0].icon;
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: Dimensions.get("window").height > 600 ? 18 : 14,
            }}>{time}</Text>
            <WeatherIcon code={icon} />
            <View style={{ flexDirection: "row" }}>
                <Text style={{
                    fontSize: Dimensions.get("window").height > 600 ? 22 : 18,
                }}>{temperature}</Text>
                <Text>o</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginHorizontal: 22,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "grey"
    }
})
export default WeatherTime;