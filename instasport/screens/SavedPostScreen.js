import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SavedPost from "../components/SavedPost";
import {removePost} from "../store/actions/removePost";
import { useSelector,useDispatch } from "react-redux";

export default function SavedPostScreen() {
  
  const dispatch=useDispatch();
  const savedPostList = useSelector(state => {
    const postsArray= [];
    for(id in state.savedPost.savedItems){
      postsArray.push(state.savedPost.savedItems[id])
    }
    return postsArray;
  });

  const myPosts = savedPostList.map((post) => (
    <SavedPost key={post.id} userName={post.userName} image={post.postImage} onRemovePost={()=>dispatch(removePost(post.id))} />
  ));
  return (
    <View style={styles.container}>
      {myPosts}
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
});
