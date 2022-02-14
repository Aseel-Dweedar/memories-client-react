import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts.js'
import useStyles from './styles';
import Form from '../form/Form.js'
import Posts from '../posts/Posts.js'

function Home() {

    const [currentId, setCurrentId] = useState(0)

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, currentId]);

    return (
        <Grow in >
            <Container>
                <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3} >
                    <Grid item xs={12} sm={7}  >
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}  >
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home