import * as React from 'react';
import { } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, } from "@expo/vector-icons";
import Home from "./screens/Home";
import City from "./screens/City";
import Profile from "./screens/Profile";
import { colors } from "./utils/colors";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        headerMode="float"
        screenOptions={{
          headerStyle: { backgroundColor: colors.mainOrange }, //sfondo default header
          headerTintColor: 'black',    //colore default scritta header

          //  headerTitle: props => <LogoTitle {...props} />       titolo (immagine) default come header 
          // headerTitleAlign: 'center'

        }}>

        <Stack.Screen name="Home" component={tabNavigation} />
        <Stack.Screen name="City" component={City}
          options={({ route }) => ({
            title: "My".concat(" ", route.params.data.city.name),


          })} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
const tabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "md-home"
          } else if (route.name === "Profile") {
            iconName = "ios-beer"
          }
          return <Ionicons name={iconName} size={size} color={color} />
        }

      })
    }
      tabBarOptions={{ 
        activeTintColor: colors.mainOrange,
        incactiveTintColor: "grey"
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>

  )
}
export default App;