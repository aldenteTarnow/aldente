import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CircularProgress} from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    progress: {
        marginTop: '25vh',
        marginBottom: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    center: {
        marginBottom: 10
    }
});

function Progress(props) {
    const { classes } = props;

    return (
        <div className={classes.progress}>
            <CircularProgress classes={{ root: classes.center }} style={{ color: purple[500] }} size={60} thickness={4}/>
            <Typography type="display1">Proszę czekać...</Typography>
        </div>
    );
}

Progress.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);