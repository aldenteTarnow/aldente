import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import NavigationList from './navigationList';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Phone from 'material-ui-icons/Phone';
import {green, grey} from 'material-ui/colors';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
const styles = {
    list: {
        width: 250
    },
    listFull: {
        width: 'auto'
    },
    color: {
        background: green['A400']
    }
};

class Panel extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <NavigationList />
            </div>
        );

        return (
            <div>
                <IconButton
                    className={classes.menuButton}
                    color="contrast"
                    aria-label="Menu"
                    onClick={this.toggleDrawer('left', true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                    <Divider/>
                    <ListItem className={classes.color}>
                        <ListItemIcon>
                            <Phone />
                        </ListItemIcon>
                        <ListItemText primary="+14 690 88 77"/>
                        <form action="tel:14 690 88 77"><button type="submit">Call +14 690 88 77</button></form>
                        <Button raised color="accent" onClick={()=>window.location='tel:14 690 88 77'}>Hot line</Button>
                    </ListItem>
                </Drawer>
            </div>
        );
    }
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Panel);
