import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';

const styles = theme => ({
    card: {
        display: 'flex',
        width: 'auto'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        // width: '40vh'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 200,
        height: 200,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

function MediaControlCard(props) {
    const { classes, theme, post } = props;

    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography type="body2">{post.message || post.story}</Typography>
                        <Typography type="caption" color="secondary">{post.from.name}</Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton aria-label="Previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="Play/pause">
                            <PlayArrowIcon className={classes.playIcon} />
                        </IconButton>
                        <IconButton aria-label="Next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={post.picture}
                    title=""
                />
            </Card>
        </div>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);