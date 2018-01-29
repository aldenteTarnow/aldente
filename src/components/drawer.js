import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import NavigationList from './navigationList';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';

const styles = {
    list: {
        width: 250
    },
    listFull: {
        width: 'auto'
    },
    container: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100vh',
        display: 'flex'
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

    render() {
        const { classes, changeThemeClick } = this.props;
        const sideList = (
            <div className={classes.list}>
                <NavigationList changeThemeClick={changeThemeClick} changeDrawer={(side, open) => this.toggleDrawer(side, open)} />
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
                </Drawer>
            </div>
        );
    }
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withWidth())(Panel);
