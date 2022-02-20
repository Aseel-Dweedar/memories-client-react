import * as api from '../api'
import * as actions from '../actions/types.js'

export const getPosts = (page) => async dispatch => {
    try {
        dispatch({ type: actions.START_LOADING })
        const { data } = await api.fetchPosts(page);
        dispatch({
            type: actions.FETCH_ALL,
            payload: data
        });
        dispatch({ type: actions.END_LOADING })
    } catch (error) {
        console.error(error.message);
    }
}
export const getPost = (id) => async dispatch => {
    try {
        dispatch({ type: actions.START_LOADING })
        const { data } = await api.fetchPost(id);
        dispatch({
            type: actions.FETCH_POST,
            payload: data
        });
        dispatch({ type: actions.END_LOADING })
    } catch (error) {
        console.error(error.message);
    }
}

export const getPostsBySearch = (searchQuery) => async dispatch => {
    try {
        dispatch({ type: actions.START_LOADING })
        const { data } = await api.fetchPostsBySearch(searchQuery);
        dispatch({
            type: actions.SEARCH,
            payload: data
        });
        dispatch({ type: actions.END_LOADING })
    } catch (error) {
        console.error(error.message);
    }
}

export const createPost = (post, navigate) => async dispatch => {
    try {
        dispatch({ type: actions.START_LOADING });

        const { data } = await api.createPost(post);

        navigate(`/posts/${data._id}`);

        dispatch({
            type: actions.CREATE,
            payload: data
        });

        dispatch({ type: actions.END_LOADING })
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
