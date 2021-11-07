import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/helper";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import DoubleClick from "react-native-double-tap";
import { useDispatch , useSelector} from "react-redux";
import { savePost } from "../store/actions/savePost";
import { removePost } from "../store/actions/removePost";


const Post = (props) => {

    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);

    const dispatch = useDispatch();
    const savedPost=useSelector(state => state.savedPost.savedItems);
    let isSaved=null;
    if(savedPost[props.id]){
        isSaved=savedPost[props.id].saved
    }

    const onPressSave=()=> {
        const postToSave = {
            userName: props.userName,
            postImage: props.image,
            id: props.id,
            saved:true,

        }
        isSaved ? dispatch(removePost(props.id)) : dispatch(savePost(postToSave));
        setSave(!save);

    }

    const emptyHeart = <Image source={require("../assets/images/heart.png")} style={style.like} />
    const fullHeart = <Image source={require("../assets/images/full-heart.png")} style={style.like} />
    const heartShape = like ? fullHeart : emptyHeart;

    const emptyBook = <Image source={require("../assets/images/bookmark.png")} style={style.bookmark} />
    const fullBook = <Image source={require("../assets/images/full-bookmark.png")} style={style.bookmark} />
    const bookShape = isSaved ? fullBook : emptyBook;




    return (
        <View style={style.container}>
            <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                <Image source={{ uri: props.imageUri }} style={style.userImage} />
                <Text style={style.userName}> {props.userName}</Text>
            </View>
            <TouchableOpacity onPress={props.onPressImage}>
                <Image source={{ uri: props.image }} style={style.postImage} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity >
                    <DoubleClick doubleTap={() => {
                        setLike(!like);
                    }}
                        delay={200} >
                        {heartShape}
                    </DoubleClick>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressSave()}>
                    {bookShape}
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 3,
        marginVertical: 10,
        paddingVertical: 3,
        elevation: 4,
        backgroundColor: "#fff"

    },
    userImage: {
        height: SCREEN_HEIGHT / 15,
        width: SCREEN_WIDTH / 7,
        borderRadius: 30
    },
    postImage: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 6,
    },
    userName: {
        fontSize: 20,
        marginLeft: 10,
    },
    like: {
        marginLeft: 25, marginTop: 15, width: 31, height: 30, tintColor: "red"

    },
    bookmark: {
        marginRight: 25, marginTop: 15, width: 31, height: 30, tintColor: "green"

    }
})
export default Post;