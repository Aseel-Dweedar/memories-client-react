import * as api from '../api'
import * as actions from '../actions/types.js'

export const getPosts = (page) => async dispatch => {
    try {
        const { data } = await api.fetchPosts(page);
        dispatch({
            type: actions.FETCH_ALL,
            payload: data
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const getPostsBySearch = (searchQuery) => async dispatch => {
    try {
        const { data } = await api.fetchPostsBySearch(searchQuery);
        dispatch({
            type: actions.SEARCH,
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

export const updatePost = (id, post) => async dispatch => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({
            type: actions.UPDATE,
            payload: data
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const likePost = (id) => async dispatch => {
    try {
        const { data } = await api.likePost(id);
        dispatch({
            type: actions.UPDATE,
            payload: data
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const deletePost = (id) => async dispatch => {
    try {
        await api.deletePost(id);
        dispatch({
            type: actions.DELETE,
            payload: id
        });
    } catch (error) {
        console.error(error.message);
    }
}
