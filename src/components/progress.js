import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    progress: {
        marginTop: '25vh'
    },
});

function Progress(props) {
    const { classes } = props;

    return (
        <div className={classes.progress}>
            <Typography align="center"><CircularProgress  style={{ color: purple[500] }} size={60} thickness={4} /></Typography>
            <Typography align="center" type="display1">Proszę czekać...</Typography>
        </div>
    );
}

Progress.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);