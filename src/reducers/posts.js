const posts = (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts, action.payload];
        case "UPDATE":
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        // case "DELETE":
        //     let newArr = posts.filter(post => _id !== post._id);
        //     return newArr;
        default:
            return posts;
    }
}

export default posts;