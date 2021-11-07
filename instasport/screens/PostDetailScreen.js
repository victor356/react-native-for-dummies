import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import Data from "../data/fake-data";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../utils/helper";

export default function PostDetail(props) {
  const { postId } = props.route.params
  const postData= Data.find(post =>post.id===postId);
    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userNameContainer} onPress={()=>props.navigation.navigate("Profile",{
        userId:postData.userId

      })}>

      <Text style={styles.userName}>By {postData.userName}</Text>
      </TouchableOpacity>
      <Image source={{uri:postData.image}} style={styles.image}/>
      <Text style={styles.description}>{postData.description}</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: SCREEN_WIDTH - 20,
    height:400,
  },
  userName:{
    textDecorationLine:"underline",
    fontSize:23,
  },
  userNameContainer:{
    marginVertical:20,
    width: SCREEN_WIDTH - 20,
  },
  description:{
    width: SCREEN_WIDTH-20,
    padding:10,
    borderWidth:1,
    color:"#555",
    fontSize:20,  
  }
});
