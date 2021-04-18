import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Dimension } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import AddCityModal from '../components/AddCityModal';
import RoundButton from '../components/RoundButton';
import axios from 'axios';

const APIKEY = "0109fc724399f88c88cbdb023cdec062";

const Home = (props)=> {



  const [cities,setCities]=useState([]);
  const [visible,setVisible]=useState(false);
  const [isFetching, setIsFetching]=useState(false);


 const openModal = () => {
     setVisible(true);
  }

  const closeModal = () => {
     setVisible(false);
  }

  const addCity = useCallback (async city =>{

    if(isFetching) return;
    setIsFetching(true)
    const call= await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&lang=it`);
    await setCities(cities.concat(call.data));
    await closeModal();
    setIsFetching(false)
    
  })

    let newCities = <Text>sto caricando</Text>
    if (cities) {
      newCities =  cities.map((city, index) => (
        <WeatherCard navigation={ props.navigation} key={index} data={city}/>
      ));
    }


    return (
      <View style={styles.container}>

        <AddCityModal addCity={ addCity} visible={ visible} closeModal={ closeModal} />


        <ScrollView contentContainerStyle={styles.cardContainer}>

          {newCities}

          <RoundButton onPress={ openModal} plusButton={true} />

          {/* <Button title={"Vai a Roma"} onPress={() =>  props.navigation.navigate("City", {
              cityName:"A FANTASTICAAA", value:"myValue"})} /> */}

        </ScrollView>
      </View>
    );
  
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
export default Home;