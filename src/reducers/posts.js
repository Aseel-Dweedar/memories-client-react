import * as actions from '../actions/types';

const posts = (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case actions.START_LOADING:
            return { ...state, isLoading: true };
        case actions.END_LOADING:
            return { ...state, isLoading: false };
        case actions.FETCH_ALL:
            const { data: posts, currentPage, numberOfPages } = action.payload;
            return { ...state, posts, currentPage, numberOfPages };
        case actions.FETCH_POST:
            return { ...state, post: action.payload };
        case actions.SEARCH:
            return { ...state, posts: action.payload };
        case actions.CREATE:
            return { ...state, posts: [...state.posts, action.payload] }
        case actions.UPDATE:
            return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post) }
        case actions.DELETE:
            return { ...state, posts: state.posts.filter(post => post._id !== action.payload) }
        default:
            return state;
    }
}

export default posts;