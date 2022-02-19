import * as actions from '../actions/types';

const posts = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_ALL:
            const { data: posts, currentPage, numberOfPages } = action.payload;
            return { ...state, posts, currentPage, numberOfPages };
        case actions.SEARCH:
            return { ...state, posts: action.payload };
        case actions.CREATE:
            return [...state, action.payload];
        case actions.UPDATE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        case actions.DELETE:
            return state.filter(post => post._id !== action.payload);
        default:
            return state;
    }
}

export default posts;