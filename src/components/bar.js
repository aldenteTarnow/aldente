import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';

import Burger from './drawer';

const styles = theme => ({
    root: {
        width: '100%',
        paddingBottom: 26,
        flex: 1,
        'justify-content': 'space-between',
        height: 5,
        bottom: -10,
    },
    flex: {
        'justify-content': 'center'
    },
    flexRight: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        'justify-content': 'space-between',
        maxWidth: 200,
        maxHeight: 20
    },
    menuButton: {
        textDecoration: 'none'
    },
    bulb: {
        marginBottom: 25
    },
    top: {
        top: -1
    }
});

function Bar(props) {
    const { classes, changeTheme, theme } = props;
    const themeTooltip =
        theme.palette.type === 'dark'
            ? 'Zmień na Jasny motyw'
            : 'Zmień na Czarny motyw';

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.top}>
                <Toolbar className={classes.root}>
                    <Hidden mdUp>
                        <Burger
                            changeThemeClick={changeTheme}
                        />
                    </Hidden>
                    <Hidden smDown>
                        <div className={classes.flex}>
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
                                to="/menu"
                            >
                                MENU
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
                    <div className={classes.flexRight}>
                        <Hidden smDown>
                            <Tooltip
                                id="tooltip-left-start"
                                title={themeTooltip}
                                placement="left-start"
                            >
                                <IconButton
                                    onClick={() =>
                                        theme.palette.type === 'dark'
                                            ? changeTheme('light')
                                            : changeTheme('dark')
                                    }
                                >
                                    <LightbulbOutline
                                        className={classes.bulb}
                                    />
                                </IconButton>
                            </Tooltip>
                        </Hidden>
                        <Hidden mdUp>
                            <span className={classes.bulb} />
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
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Bar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(Bar);
