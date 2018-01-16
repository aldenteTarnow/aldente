import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import NavigationList from './navigationList';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Phone from 'material-ui-icons/Phone';
import {green} from 'material-ui/colors';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import MobileDetect from 'mobile-detect';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';

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
        right: false,
        isMobile: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };

    detect() {
        const md = new MobileDetect(navigator.userAgent);
        const setS = (isMobile) => this.setState({isMobile});

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
        const { classes} = this.props;

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
                        {
                            this.state.isMobile ?
                                <Button raised dense color="primary" onClick={()=>window.location='tel:14 690 88 77'}>Zadzwoń</Button> :
                                null
                        }
                    </ListItem>
                </Drawer>
            </div>
        );
    }
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withWidth())(Panel);
