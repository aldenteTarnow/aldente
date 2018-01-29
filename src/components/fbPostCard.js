import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, {
    CardHeader,
    CardMedia,
    CardContent,
    CardActions
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import '../styles/test.css';
import { blue, red } from 'material-ui/colors';
import Icon from 'material-ui/Icon';
import moment from 'moment';

const styles = theme => ({
    card: {
        maxWidth: 700,
        maxHeight: 480
    },
    media: {
        height: 200
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: red[500]
    },
    flexGrow: {
        flex: '1 1 auto'
    },
    cardHeight: {
        height: 120,
        overflow: 'auto'
    },
    buttons: {
        height: 38,
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fbHover: {
        '&:hover': {
            color: blue[500]
        }
    },
    heartBeat: {
        color: red[400]
    },
    likesCount: {
        marginLeft: 5
    }
});

function FbPostCard(props) {
    const { classes, post } = props;

    if (!post) {
        return null;
    }
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            <img src={post.userIcon} alt="" />
                        </Avatar>
                    }
                    title={post.from.name}
                    subheader={moment(post.created_time).format('DD-MM-YYYY')}
                />
                <CardMedia
                    className={classes.media}
                    image={post.full_picture}
                    title=""
                />
                <CardContent className={classes.cardHeight}>
                    <Typography component="p">
                        {post.message || post.story}
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing className={classes.buttons}>
                    <IconButton
                        aria-label="Lajki"
                        disabled
                        className={classes.heartBeat}
                    >
                        {post.likes > 0 ? (
                            <Icon className="pulse">
                                <span className="fa fa-heartbeat">
                                    <strong className={classes.likesCount}>{post.likes}</strong>
                                </span>
                            </Icon>
                        ) : (
                            <span />
                        )}
                    </IconButton>
                    <IconButton
                        aria-label="Facebook"
                        component={Link}
                        to={post.link}
                        target="_blank"
                    >
                        <Icon className={classes.fbHover}>
                            <span className="fa fa-facebook-official" />
                        </Icon>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}

FbPostCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FbPostCard);
