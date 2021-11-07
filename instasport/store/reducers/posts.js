import Data from "../../data/fake-data";
import { FETCH_POST } from "../actions/fetchPost"

initialState = {
    posts: Data
}

const Posts = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST:
            return {
                posts: action.posts
            }
        default:
            return state;
    }

}


export default Posts;