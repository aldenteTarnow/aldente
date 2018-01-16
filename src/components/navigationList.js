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
import Divider from 'material-ui/Divider';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    div: {
        marginBottom: 10
    }
});

function NavigationList(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List>
                <ListItem button component={Link} to="/menu">
                    <ListItemIcon>
                        <RestaurantMenu />
                    </ListItemIcon>
                    <ListItemText primary="MENU" />
                </ListItem>
                <ListItem button component={Link} to="/o-nas">
                    <ListItemIcon>
                        <InfoOutline />
                    </ListItemIcon>
                    <ListItemText primary="O NAS" />
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
            </List>
            <Divider classes={{root: classes.div}}/>
        </div>
    );
}

NavigationList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationList);
