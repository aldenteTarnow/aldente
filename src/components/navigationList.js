import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import DraftsIcon from 'material-ui-icons/Drafts';
import NewReleases from 'material-ui-icons/NewReleases';
import RestaurantMenu from 'material-ui-icons/RestaurantMenu';
import InfoOutline from 'material-ui-icons/InfoOutline';
import Collections from 'material-ui-icons/Collections';
import Button from 'material-ui/Button';
import MobileDetect from "mobile-detect/mobile-detect";
import {green, grey} from "material-ui/colors/index";


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    aldente: {
        paddingLeft: '15%',
        position: 'relative',
        paddingRight: 0
    },
    btnBottom: {
        marginTop: '100%',
        paddingBottom: 0
    },
    color: {
        background: green['A400']
    },
    divider: {
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 10,
    },

});

class NavigationList extends React.Component {
    state = {
        isMobile: false
    };

    detect() {
        const md = new MobileDetect(navigator.userAgent);
        const setS = isMobile => this.setState({ isMobile });

        if ((md.mobile() && md.phone()) || (md.mobile() && md.tablet())) {
            setS(true);
        } else {
            setS(false);
        }
    }

    componentDidMount() {
        this.detect();
    }

    componentWillReceiveProps() {
        this.detect();
    }

    render() {
        const { classes, theme, changeThemeClick, changeDrawer } = this.props;
        const isDarkTheme = theme.palette.type === 'dark';

        return (
            <div className={classes.root}>
                <List>
                    <ListItem button component={Link} to="/o-nas">
                        <ListItemIcon>
                            <InfoOutline />
                        </ListItemIcon>
                        <ListItemText primary="O NAS" />
                    </ListItem>
                    <ListItem button component={Link} to="/menu">
                        <ListItemIcon>
                            <RestaurantMenu />
                        </ListItemIcon>
                        <ListItemText primary="MENU" />
                    </ListItem>
                    <ListItem button component={Link} to="/galeria">
                        <ListItemIcon>
                            <Collections />
                        </ListItemIcon>
                        <ListItemText primary="GALERIA" />
                    </ListItem>
                    <ListItem button component={Link} to="/nowosci">
                        <ListItemIcon>
                            <NewReleases />
                        </ListItemIcon>
                        <ListItemText primary="NOWOŚCI" />
                    </ListItem>
                    <ListItem button component={Link} to="/kontakt">
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="KONTAKT" />
                    </ListItem>
                    <ListItem divider className={classes.divider}/>
                    <ListItem className={classes.color}>
                        <ListItemText primary="+14 690 88 77" />
                        {this.state.isMobile ? (
                            <Button
                                raised
                                dense
                                color="primary"
                                onClick={() =>
                                    (window.location = 'tel:14 690 88 77')
                                }
                            >
                                Zadzwoń
                            </Button>
                        ) : null}
                    </ListItem>
                    <ListItem className={classes.btnBottom}>
                        <Button
                            raised
                            dense
                            color={isDarkTheme ? 'inherit' : 'primary'}
                            onClick={() =>
                                isDarkTheme
                                    ? changeThemeClick('light')
                                    : changeThemeClick('dark')
                            }
                        >
                            {isDarkTheme ? 'Jasny motyw' : 'Ciemny motyw'}
                        </Button>
                        <Button
                            dense
                            color={isDarkTheme ? 'accent' : 'default'}
                            component={Link}
                            to="/"
                            className={classes.aldente}
                            onClick={changeDrawer('left', false)}
                        >
                            Aldente
                        </Button>
                    </ListItem>
                </List>
            </div>
        );
    }
}

NavigationList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(NavigationList);
