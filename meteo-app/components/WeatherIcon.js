import React from "react";
import { Image, Dimensions } from "react-native";

const WeatherIcon = props => {
    const url = `http://openweathermap.org/img/wn/${props.code}@2x.png`;
    return <Image source={{ uri: url }} style={{
        width: Dimensions.get("window").height > 600 ? 50 : 30,
        height: Dimensions.get("window").height > 600 ? 50 : 30,

    }} />

}

export default WeatherIcon;