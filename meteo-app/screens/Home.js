import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Dimension } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import AddCityModal from '../components/AddCityModal';
import RoundButton from '../components/RoundButton';
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

const APIKEY = "0109fc724399f88c88cbdb023cdec062";

export default class Home extends React.Component {

  state = {
    cities: [],
    visible: false,
  }

  openModal = () => {
    this.setState({
      visible: true,
    })
  }

  closeModal = () => {
    this.setState({
      visible: false,
    })
  }

  addCity = (city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&lang=it`).then(
      call => {
        this.setState(prevState => {
          return {
            cities: prevState.cities.concat(call.data)
          }
        }, this.closeModal())
      }
    ).catch(error => {
      console.log(error)
    })


  }




  render() {
    let cities = <Text>sto caricando</Text>
    if (this.state.cities) {
      cities = this.state.cities.map((city, index) => (
        <WeatherCard navigation={this.props.navigation} key={index} data={city}/>
      ))
      console.log(cities)
    }


    return (
      <View style={styles.container}>

        <AddCityModal addCity={this.addCity} visible={this.state.visible} closeModal={this.closeModal} />


        <ScrollView contentContainerStyle={styles.cardContainer}>

          {cities}

          <RoundButton onPress={this.openModal} plusButton={true} />

          {/* <Button title={"Vai a Roma"} onPress={() => this.props.navigation.navigate("City", {
              cityName:"A FANTASTICAAA", value:"myValue"})} /> */}

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  cardContainer: {
    alignItems: "center",
    flexGrow: 1,
    marginTop: 20,
    paddingBottom: 30,
  },
});
