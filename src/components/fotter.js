import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom';
import {brown} from 'material-ui/colors';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = {
    root: {
        width: '100%',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        background: brown[500]
    },
    iconsRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    disableScroll: {
        overflow: 'hidden'
    }
};

class Fotter extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <BottomNavigation
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction disabled/>
                    <BottomNavigationAction component={Link} to='/' label="Aldente Pizza"/>
                    <BottomNavigationAction onClick={this.handleClickOpen} label="Przypisy"/>
                </BottomNavigation>
                <Dialog
                    open={this.state.open}
                    transition={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    fullWidth
                    maxWidth={false}
                >
                    <DialogTitle id="alert-dialog-slide-title" align="center">
                        Twórcy
                    </DialogTitle>
                    <DialogContent className={classes.disableScroll}>
                        <DialogContentText id="alert-dialog-slide-description" align="center">
                            Tomasz Stysiał
                        </DialogContentText>
                    </DialogContent>
                    <DialogTitle id="alert-dialog-slide-title" align="center">
                        Ikony
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description" align="center" className={classes.iconsRoot}>
                            <span>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span>
                            <br/>
                            <span>Icons made by <a href="https://www.flaticon.com/authors/baianat" title="Baianat">Baianat</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span>
                            <br/>
                            <span>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span>
                            <br/>
                            <span>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span>
                            <br/>
                            <span>Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span>
                            <span>Icons made by <a href="https://www.flaticon.com/authors/hand-drawn-goods" title="Hand Drawn Goods">Hand Drawn Goods</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Zamknij
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

Fotter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fotter);