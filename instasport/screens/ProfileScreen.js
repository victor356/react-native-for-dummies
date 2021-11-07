import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import Data from "../data/fake-data";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../utils/helper";

export default function Profile(props) {
  const { userId } = props.route.params
  const userPosts = Data.filter(post => post.userId === userId);
  
  const postImages = userPosts.map(post => (
    <Image source={{ uri: post.image }} style={styles.image} />
  ));
  
  const userImage = userPosts[0].userImage;
  const userName = userPosts[0].userName;


  return (
    <View style={styles.container}>
      <View style={styles.imageBackground}>
        <ImageBackground source={{ uri: userImage }} blurRadius={10} style={styles.imageBackground}>
          <Image source={{ uri: userImage }} style={styles.profileImage} />
        </ImageBackground>
      </View>
      <Text style={{marginTop:50, fontSize:20, fontWeight:"600", alignSelf:"center"}}>{userName}</Text>
      <View style={styles.postContainer}>
        {postImages}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  image: {
    height: SCREEN_HEIGHT / 3,
    width: SCREEN_WIDTH / 3,
    margin: 5

  },
  postContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 50
  },
  imageBackground: {
    height: 100, 
    width: SCREEN_WIDTH,
    alignItems:"center"
  },
  profileImage: {
width:50,
height:50,
borderRadius:50,
position:"absolute",
top:75,
  }
});
