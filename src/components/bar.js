import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

import Drawer from './drawer';

const styles = {
    root: {
        width: '100%'
    },
    flex: {
        flex: 1,
        textDecoration: 'none'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

function Bar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Drawer />
                    <Typography
                        type="title"
                        color="inherit"
                        className={classes.flex}
                        align="right"
                        component={Link}
                        to="/"
                    >
                        Aldente Pizza
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Bar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bar);
