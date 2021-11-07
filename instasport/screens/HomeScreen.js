import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, View, } from 'react-native';
import { ScrollView, State } from 'react-native-gesture-handler';
import Post from "../components/Post";
import {useSelector,useDispatch} from "react-redux";
import {fetchPost} from "../store/actions/fetchPost"

export default function Home(props) {
    
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchPost);
  })
  const allPosts=useSelector(state=>state.posts.posts)
  const Posts = allPosts.map((data) => (
    <Post onPressImage={() => props.navigation.navigate("PostDetail", {
      postId: data.id,
      
      title:data.title,
    })} 
    key={data.id} imageUri={data.image} id={data.id} userName={data.userName} image={data.image} />
  ));
  return (
    <View style={styles.container}>
      <ScrollView>
        {Posts}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae8e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
