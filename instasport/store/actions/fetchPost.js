import axios from "axios";
import Post from "../../models/Post";

export const FETCH_POST = "FETCH_POST";

export const fetchPost = () => {
    return async dispatch => {
        //operazioni asincrone
        const url = `https://instasport-3a33a-default-rtdb.europe-west1.firebasedatabase.app/post.json`;
        const data = await axios.get(url)
        console.warn("My data", data)
        const myPosts = data.data;
        const loadedPosts = [];
        for (key in myPosts) {
            loadedPosts.push(
                new Post(
                key,
                myPosts[key].image,
                myPosts[key].title,
                myPosts[key].description,
                myPosts[key].userId,
                myPosts[key].userName,
                myPosts[key].userImage,
            )
            )
        }

        dispatch({ type: FETCH_POST, posts:loadedPosts })
    }
}