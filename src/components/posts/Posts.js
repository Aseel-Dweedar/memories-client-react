import React from 'react'
import Post from './post/Post'
import useStyles from './styles'

function Posts() {

    const classes = useStyles();

    return (
        <>
            <h3>Posts</h3>
            <Post />
            <Post />
        </>
    )
}

export default Posts