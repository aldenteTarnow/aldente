import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import FbPost from './fbPostCard';
import FbService from '../services/fbService';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: '1vh',
        padding: 10
    }
});

class News extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        return FbService()
            .then(posts => this.setState({ posts }))
            .catch(err => {
                console.log(err);
            });
    }

    renderPosts() {
        const result = [];
        for (let i = 0; i < this.state.posts.length - 1; i++) {
            result.push(
                <Grid container spacing={16}>
                    <Grid item xs />
                    <Grid item xs={5}>
                        <FbPost post={this.state.posts[i]} />
                    </Grid>
                    <Grid item xs={5}>
                        <FbPost post={this.state.posts[i + 1]} />
                    </Grid>
                    <Grid item xs />
                </Grid>
            );
            i += 2;
        }
        return result;
    }

    render() {
        const { classes } = this.props;

        console.log(this.state);
        return (
            <div className={classes.root}>
                <div>
                    <Hidden only={['md', 'lg', 'xl']}>
                        <Grid container spacing={16}>
                            {this.state.posts.map((post, i) => (
                                <Grid item xs={12} sm={6} key={i}>
                                    <FbPost post={post} />
                                </Grid>
                            ))}
                        </Grid>
                    </Hidden>
                </div>
                <div>
                    <Hidden only={['xs', 'sm']}>
                        {this.renderPosts().map((post, i) => (
                            <div key={i}>{post}</div>
                        ))}
                    </Hidden>
                </div>
            </div>
        );
    }
}

News.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(News);
