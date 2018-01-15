import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';

import Burger from './drawer';

const styles = {
    root: {
        width: '100%',
        paddingBottom: 35,
        flex: 1,
        'justify-content': 'space-between',
        height: 5,
        bottom: -15
    },
    flex: {
        'justify-content': 'center'
    },
    menuButton: {
        textDecoration: 'none'
    }
};

function Bar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.root}>
                    <Hidden smUp>
                        <Burger />
                    </Hidden>
                    <Hidden xsDown>
                        <div className={classes.flex}>
                            <Button
                                color="contrast"
                                component={Link}
                                to="/menu"
                            >
                                MENU
                            </Button>
                            <Button
                                color="contrast"
                                component={Link}
                                to="/o-nas"
                            >
                                O NAS
                            </Button>
                            <Button
                                color="contrast"
                                component={Link}
                                to="/galeria"
                            >
                                GALERIA
                            </Button>
                            <Button
                                color="contrast"
                                component={Link}
                                to="/nowosci"
                            >
                                NOWOŚCI
                            </Button>
                            <Button
                                color="contrast"
                                component={Link}
                                to="/kontakt"
                            >
                                KONTAKT
                            </Button>
                        </div>
                    </Hidden>
                    <Typography
                        type="title"
                        color="inherit"
                        component={Link}
                        to="/"
                        className={classes.menuButton}
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
