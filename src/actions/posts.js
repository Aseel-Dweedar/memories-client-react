import * as api from '../api'
import * as actions from '../actions/types.js'

export const getPosts = () => async dispatch => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({
            type: actions.FETCH_ALL,
            payload: data
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createPost = (post) => async dispatch => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: actions.CREATE,
            payload: data
        });
    } catch (error) {
        console.error(error.message);
    }
}