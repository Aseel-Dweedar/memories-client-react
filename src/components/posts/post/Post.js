import React from 'react'
import { Card, CardActions, CardMedia, Button, Typography, CardContent } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { deletePost, likePost } from '../../../actions/posts.js'
import moment from 'moment';

function Post({ setCurrentId, post }) {

    let { creator, title, message, tags, selectedFile, createAt, likeCount, _id } = post;

    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            {selectedFile ? (
                <CardMedia
                    className={classes.media} image={selectedFile} title={title}
                />
            ) : (
                <CardMedia
                    className={classes.media} image={require('../../../images/placeholder.png')} title={title}
                />
            )}
            <div className={classes.overlay} >
                <Typography variant='h6' >{creator}</Typography>
                <Typography variant='body2' >{moment(createAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2} >
                <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(_id)} >
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>
            <div className={classes.details} >
                <Typography variant='body2' color="textSecondary" >{tags && tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom >{title}</Typography>
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p' >{message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions} >
                <Button color='primary' size='small' onClick={() => dispatch(likePost(_id))} >
                    <ThumbUpAltIcon fontSize='small' />
                    &nbsp; {likeCount}
                </Button>
                <Button color='primary' size='small' onClick={() => dispatch(deletePost(_id))} >
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post