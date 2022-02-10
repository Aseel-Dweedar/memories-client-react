import React from 'react';
import { useSelector } from 'react-redux';

import Post from './post/Post';
import useStyles from './styles';

function Posts() {

    const posts = useSelector((state) => state.posts)
    const classes = useStyles();

    console.log(posts);


    return (
        <>
            <h3>Posts</h3>
            <Post />
            <Post />
        </>
    )
}

export default Posts