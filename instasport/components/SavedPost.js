import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { removePost } from '../store/actions/removePost';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/helper";
import { Ionicons } from "@expo/vector-icons";

export default function SavedPost(props) {



  return (
    <View style={styles.container}>
      <Image style={styles.postImage} source={{ uri: props.image }} />

      <Text style={styles.userName}>{props.userName}</Text>
     
      <TouchableOpacity onPress={props.onRemovePost}>
        <Ionicons name="md-trash" size={32} color={"black"} />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'grey',
    width: SCREEN_WIDTH - 20,
    borderRadius: 6,
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    margin: 10
  },
  postImage: {

    height: 80,
    width: SCREEN_WIDTH / 3,
  },
  bookmark: {
    marginRight: 25, marginTop: 15, width: 31, height: 30, tintColor: "green"

  },
  userName: {
    fontSize: 20,
    fontWeight: "500",
  }
});
