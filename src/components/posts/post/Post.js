import React from 'react'
import { Card, CardActions, CardMedia, Button, Typography, CardContent } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from './styles';
import moment from 'moment';

function Post(props) {

    let { creator, title, message, tags, selectedFile, createAt, likeCount } = props.post;

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
                <Button style={{ color: "white" }} size="small" onClick={() => console.log("here")} >
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>
            <div className={classes.details} >
                <Typography variant='body2' color="textSecondary" >{tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom >{message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActionss} >
                <Button color='primary' size='small' onClick={() => console.log("wow")} >
                    <ThumbUpAltIcon fontSize='small' />
                    Like
                    {likeCount}
                </Button>
                <Button color='primary' size='small' onClick={() => console.log("wow")} >
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post