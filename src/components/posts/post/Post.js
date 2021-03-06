import React from 'react'
import { Card, CardActions, CardMedia, Button, Typography, CardContent, ButtonBase } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from 'react-redux';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import { deletePost, likePost } from '../../../actions/posts.js'
import moment from 'moment';

function Post({ setCurrentId, post }) {

    let { name, title, message, tags, selectedFile, createAt } = post;

    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openPost = () => navigate(`/posts/${post._id}`);

    return (
        <Card className={classes.card} raised elevation={6} >
            <ButtonBase className={classes.cardAction} onClick={openPost} >
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
                    <Typography variant='h6' >{name}</Typography>
                    <Typography variant='body2' >{moment(createAt).fromNow()}</Typography>
                </div>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <div className={classes.overlay2}>
                        <Button onClick={(e) => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
                            <MoreHorizIcon fontSize="medium" />
                        </Button>
                    </div>
                )}
                <div className={classes.details} >
                    <Typography variant='body2' color="textSecondary" >{tags && tags.map(tag => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title} variant='h5' gutterBottom >{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p' >{message}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions} >
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" /> Delete
                    </Button>)}
            </CardActions>
        </Card>
    )
}

export default Post