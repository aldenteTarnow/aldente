import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
});

function NavigationList(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List>
                <ListItem button component={Link} to="/menu">
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="MENU" />
                </ListItem>
                <ListItem button component={Link} to="/o-nas">
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="O NAS" />
                </ListItem>
                <ListItem button component={Link} to="/galeria">
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="GALERIA" />
                </ListItem>
                <ListItem button component={Link} to="/oferta">
                    <ListItemIcon>
                        <DraftsIcon />
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
        </div>
    );
}

NavigationList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationList);
