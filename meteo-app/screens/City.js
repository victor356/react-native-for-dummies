import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import WeatherTime from "../components/WeatherTime";
import WeatherDay from "../components/WeatherDay";


const City = (props) => {
    //import
    const data = props.route.params.data;
    const weatherDayData = data.list;

    //data structure
    const WeatherTimeData = weatherDayData.slice(0, 9);
    
    const WeatherTimes = WeatherTimeData.map((item, index) => (
        <WeatherTime data={item} key={index} />
    ));

    //data print
    const description = data.list[0].weather[0].description;
    const temperature = Math.floor(data.list[0].main.temp - 273.15);
    const filteredDayData = weatherDayData.filter(day => {
        return day.dt_txt.includes('18:00:00')
    })
    const WeatherDays = filteredDayData.map((item,index)=> (
        <WeatherDay data={item} key={index} />
    ))

return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.frontContainer}>
            <Text style={styles.cityName}>Hello, {data.city.name}</Text>
            <Text style={styles.cityMeteo}>{description} </Text>
            <Text style={styles.cityTemperature}>{temperature}°</Text>

        </View>
        <View style={styles.scrollContainer}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={styles.contentView}>
                {WeatherTimes}
            </ScrollView>

        </View>
        <View style={styles.daysContainer}>
            <ScrollView>
            {WeatherDays}
            </ScrollView>
        </View>



        {/* <Button title={"CITY"} onPress={()=> navigation.push("City")}/> */}

    </View>
)
}
const aa = StyleSheet.create({

})
const styles = StyleSheet.create({
    frontContainer: {
        flex: 3,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    contentView: {
        alignItems: "center"
    },
    scrollContainer: {
        flex: 1,
        width: "100%",
        borderTopWidth: 2,
        borderBottomWidth: 2,

    },
    scrollView: {
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black"
    },
    daysContainer: {
        flex: 3,
        width: "100%",

    },
    cityName: {
        fontSize: Dimensions.get("window").height > 600 ? 45: 35,
    },
    cityMeteo: {
        fontSize: Dimensions.get("window").height > 600 ? 20: 15,
    },
    cityTemperature: {
        fontSize: Dimensions.get("window").height > 600 ? 60: 50,
        marginTop: 10,
    }
})

export default City;