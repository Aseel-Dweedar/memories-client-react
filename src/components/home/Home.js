import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPosts } from '../../actions/posts.js'
import useStyles from './styles';
import Form from '../form/Form.js'
import Posts from '../posts/Posts.js'
import Paginate from '../Pagination.jsx';

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function Home() {

    const [currentId, setCurrentId] = useState(0);
    const [search, setSearch] = useState("");
    console.log(search);
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = useQuery();

    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, currentId]);

    return (
        <Grow in >
            <Container maxWidth='xl' >
                <Grid className={classes.gridContainer} container justifyContent='space-between' alignItems='stretch' spacing={3} >
                    <Grid item xs={12} sm={6} md={9} >
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <AppBar className={classes.appBarSearch} position='static' color='inherit' >
                            <TextField
                                name='search'
                                variant='outlined'
                                label='Search Memories'
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} />
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper className={classes.pagination} elevation={6} >
                            <Paginate />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home