// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "./screens/HomeScreen";
import PostDetail from "./screens/PostDetailScreen";
import Profile from "./screens/ProfileScreen";
import SavedPost from "./screens/SavedPostScreen";
import HeaderButton from "./components/HeaderButton";
import createPost from './screens/createPostScreen';
import Signin from './screens/SignInScreen';
import Signup from './screens/SignUpScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={({ navigation }) => ({
                    headerLeft: () => <HeaderButton onPressLeft={() => navigation.toggleDrawer()} left />,
                    headerRight: () => <HeaderButton onPressRight={() => navigation.navigate("Crea Post")} />,
                })}
                name="Home" component={Home} />
            <Stack.Screen name="PostDetail" component={PostDetail} options={({ route }) => ({ title: route.params.title })} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Crea Post" component={createPost} />
        </Stack.Navigator>


    );
}

function SavedStackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Post Salvati" component={SavedPost}
                options={({ navigation }) => ({
                    headerLeft: () => <HeaderButton left onPressLeft={() => navigation.toggleDrawer()} />
                })} />

        </Stack.Navigator>


    );
}
function DrawerNavigation() {
    return (
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={StackNavigation} />
                <Drawer.Screen name="Post Salvati" component={SavedStackNavigation} />
            </Drawer.Navigator>
    );
}
function AuthNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
);
}

function MainNavigation() {
const userToken =null;
return(
    <NavigationContainer>
        {userToken ? (<DrawerNavigation/>): (<AuthNavigation/>)}
    </NavigationContainer>


)
}

export default MainNavigation;