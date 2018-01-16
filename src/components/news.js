import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import FbPost from './fbPostCard';
import FbService from '../services/fbService';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: '3vh',
        // padding: '0 10px'
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    black: {
        background: '#9c9c9c',
        'z-index': -1
    }
});


class News extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        return FbService().then((posts) => this.setState({ posts })).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const { classes } = this.props;

        console.log(this.state);
        return (
            <div className={classes.root}>
                <Grid container spacing={16}>
                    {this.state.posts.map((post, i) => (
                        <Grid item xs key={i}>
                            <FbPost post={post}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

News.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(News);
